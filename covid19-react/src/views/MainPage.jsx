import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import NextIcon from "../assets/icon/NextIcon.svg";
import GenderIcon from "../assets/icon/genderIcon.svg";
import MapIcon from "../assets/icon/mapIcon.svg";

import { Covid } from "../api/Covid";
import { format, subDays } from "date-fns";
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const MainPage = () => {
  const navigate = useNavigate();

  // 실시간 covid19 현황 기준 날짜
  const [covidStandard, setCovidStandard] = useState("");
  const [covidStandardTime, setCovidStandardTime] = useState("");
  // 일일 확진자
  const [todayConfirmedPerson, setTodayConfirmedPerson] = useState("");
  // 누적 확진자
  const [totalConfirmedPerson, setTotalConfirmedPerson] = useState("");
  // 하루 전 누적 확진자
  const [yesterdayConfirmedPerson, setYesterdayConfirmPerson] = useState("");

  // 그래프 데이터 배열
  const [graphData, setGraphData] = useState([]);

  const confirmCountAPI = async () => {
    const today = new Date();
    // 어제 날짜
    const yesterdayRes = await Covid({
      date: format(subDays(today, 1), "yyyyMMdd"),
    });
    // 오늘 날짜
    const todayRes = await Covid({ date: format(today, "yyyyMMdd") });

    // 최근 7일 간 확진자 수
    const weekRes = await Covid({
      date: format(today, "yyyyMMdd"),
      weekDate: format(subDays(today, 7), "yyyyMMdd"),
    });

    if (yesterdayRes) {
      setYesterdayConfirmPerson(yesterdayRes.decideCnt);
    }

    if (todayRes) {
      const date = format(
        new Date(
          `${todayRes.stateDt.toString().substring(0, 4)}-${todayRes.stateDt
            .toString()
            .substring(4, 6)}-${todayRes.stateDt.toString().substring(6, 8)}`
        ),
        "yyyy.MM.dd."
      );

      if (weekRes) {
        for (let i = 0; i < weekRes.length; i++) {
          if (i + 1 !== 8) {
            setGraphData((prev) => [
              ...prev,
              {
                name: weekRes[i].stateDt.toString().substring(4),
                "7일간 확진자 현황":
                  weekRes[i].decideCnt - weekRes[i + 1].decideCnt,
              },
            ]);
          }
        }
      }

      // 기준 날짜
      setCovidStandard(date);
      // 기준 시간
      setCovidStandardTime(todayRes.stateTime);
      // 누적 확진자 수
      setTotalConfirmedPerson(todayRes.decideCnt);
    }
  };

  useEffect(() => {
    confirmCountAPI();
  }, []);

  useEffect(() => {
    console.log("graphData", graphData);
  }, [graphData]);
  // 일일 확진자 수
  useEffect(() => {
    if (totalConfirmedPerson && yesterdayConfirmedPerson) {
      setTodayConfirmedPerson(
        (totalConfirmedPerson - yesterdayConfirmedPerson).toString()
      );
    }
  }, [totalConfirmedPerson, yesterdayConfirmedPerson]);

  return (
    <MainContainer className="test">
      <LiveStatus>
        <SectionTitleDiv>
          <SectionTitle>실시간 Covid19 현황</SectionTitle>
          <SectionSubTitle>
            {covidStandard &&
              covidStandardTime &&
              `(${covidStandard} ${covidStandardTime}기준)`}
          </SectionSubTitle>
        </SectionTitleDiv>

        <LiveContent>
          {/* 그래프 */}
          <LiveGraphDiv>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart width={150} height={40} data={graphData}>
                <XAxis dataKey="name" style={{ fontSize: "0.7rem" }} />
                <YAxis style={{ fontSize: "0.7rem" }} />
                <Tooltip />
                <Legend />
                <Bar dataKey="7일간 확진자 현황" fill="#1334ab" />
              </BarChart>
            </ResponsiveContainer>
          </LiveGraphDiv>

          <LiveText>
            일일 확진자 :{" "}
            {todayConfirmedPerson.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}명
          </LiveText>
          <LiveText>
            누적 확진자 :{" "}
            {totalConfirmedPerson
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            명
          </LiveText>
        </LiveContent>
      </LiveStatus>

      <SmallStatusContainer>
        <SmallStatus>
          <SmallIcon>
            <img src={GenderIcon} alt="genderIcon" />
          </SmallIcon>
          <SmallTitle>성별 / 연령별 현황</SmallTitle>

          <NextIconDiv
            onClick={() => {
              navigate("/genderPage");
            }}
          >
            <img src={NextIcon} alt="NextIcon" />
          </NextIconDiv>
        </SmallStatus>

        <SmallStatus>
          <SmallIcon>
            <img src={MapIcon} alt="mapIcon" />
          </SmallIcon>
          <SmallTitle>지역별 현황</SmallTitle>

          <NextIconDiv
            onClick={() => {
              navigate("/mapPage");
            }}
          >
            <img src={NextIcon} alt="NextIcon" />
          </NextIconDiv>
        </SmallStatus>
      </SmallStatusContainer>

      <DeathStatus>
        <SectionTitleDiv>
          <SectionTitle>사망자 현황</SectionTitle>
          <SectionSubTitle>(2022.08.17 19:00 기준)</SectionSubTitle>
        </SectionTitleDiv>
        <DeathGraphDiv>그래프</DeathGraphDiv>
        <DeathText>일일 사망자 : 42명</DeathText>
        <DeathText>누적 사망자 : 25,752명</DeathText>
        <DeathText>최근 7일간 일평균 : 52명</DeathText>
      </DeathStatus>
    </MainContainer>
  );
};

export default MainPage;

const MainContainer = styled.div`
  position: absolute;
  top: 80px;
  left: 0;
  width: 100%;
  overflow-y: scroll;
  background: #f8f7f9;

  &::-webkit-scrollbar {
    display: none !important;
  }
`;

const LiveStatus = styled.div`
  width: 95%;
  height: 250px;
  box-shadow: 0 1px 6px 3px rgba(9, 21, 64, 0.25);
  border-radius: 5px;
  background: #f8f7f9;
  margin: 30px auto 0;
  box-sizing: border-box;
  padding-top: 5px;
  padding-left: 5px;
  overflow: hidden;
`;

const SectionTitleDiv = styled.div`
  width: 100%;
  height: 20px;
  line-height: 20px;
`;
const SectionTitle = styled.span`
  font-weight: 900;
  font-size: 1.2rem;
  color: #1334ab;
`;
const SectionSubTitle = styled.span`
  font-size: 0.5rem;
  color: #1334ab;
  margin-left: 5px;
`;
const LiveContent = styled.div`
  width: clac(100% - 10px);
  height: calc(100% - 40px);
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const LiveGraphDiv = styled.div`
  width: calc(100% - 5px);
  height: 80%;
  //background: gray;
`;
const LiveText = styled.p`
  font-size: 0.8rem;
  width: 100%;
  height: 20px;
  margin-top: 10px;
  margin-bottom: 0;
  color: #1334ab;
`;

const SmallStatusContainer = styled.div`
  width: 95%;
  height: 130px;
  margin: 30px auto 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SmallStatus = styled.div`
  width: 45%;
  height: 130px;
  position: relative;
  box-shadow: 0 1px 6px 3px rgba(9, 21, 64, 0.25);
  border-radius: 5px;
  background: #f8f7f9;
  box-sizing: border-box;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SmallTitle = styled.p`
  font-size: 1rem;
  font-weight: 900;
  color: #1334ab;
`;
const SmallIcon = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 5px;

  & img {
    width: 100%;
    height: 100%;
  }
`;
const NextIconDiv = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  bottom: 5px;
  right: 5px;

  & img {
    width: 100%;
    height: 100%;
  }
`;

const DeathStatus = styled.div`
  width: 95%;
  height: 400px;
  box-shadow: 0 1px 6px 3px rgba(9, 21, 64, 0.25);
  border-radius: 5px;
  background: #f8f7f9;
  margin: 30px auto 30px;
  box-sizing: border-box;
  padding: 5px 0 0 5px;
`;
const DeathGraphDiv = styled.div`
  width: calc(100% - 5px);
  height: 70%;
  background: gray;
  margin-top: 10px;
`;
const DeathText = styled.p`
  margin-top: 10px;
  margin-bottom: 0;
  color: #1334ab;
  font-size: 0.8rem;
`;
