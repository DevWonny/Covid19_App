import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import MaleIcon from "../assets/icon/maleIcon.svg";
import FemaleIcon from "../assets/icon/femaleIcon.svg";

import Loading from "../components/Loading";

import { format } from "date-fns";

import { CovidGender } from "../api/Covid";

import {
  Bar,
  BarChart,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const GenderPage = () => {
  // dark mode
  const isDark = useSelector((state) => state.theme.mode);

  // 기준 날짜 및 시간
  const [standardTime, setStandardTime] = useState("");
  // 남성 확진자 수
  const [maleConfirmCount, setMaleConfirmCount] = useState("");
  // 여성 확진자 수
  const [femaleConfirmCount, setFemaleConfirmCount] = useState("");
  // 남성 확진률
  const [maleConfirmPercent, setMaleConfirmPercent] = useState("");
  // 여성 확진률
  const [femaleConfirmPercent, setFemaleConfirmPercent] = useState("");
  // 남성 사망자 수
  const [maleDeathCount, setMaleDeathCount] = useState("");
  // 여성 사망자 수
  const [femaleDeathCount, setFemaleDeathCount] = useState("");
  // 남성 사망률
  const [maleDeathPercent, setMaleDeathPercent] = useState("");
  // 여성 사망률
  const [femaleDeathPercent, setFemaleDeathPercent] = useState("");
  // 성별 확진자 차트 데이터 배열
  const [genderData, setGenderData] = useState([]);
  // 연령별 확진자 차트 데이터 배열
  const [ageData, setAgeData] = useState([]);
  // loading
  const [isLoading, setIsLoading] = useState(true);

  // 차트
  const COLORS = ["#ff777d", "#1334ab"];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  // api 호출
  const genderFetchApi = async () => {
    setIsLoading(true);
    const res = await CovidGender();

    if (res) {
      console.log(res);
      // 기준 시간
      setStandardTime(format(new Date(res[0].createDt), "yyyy.MM.dd hh:mm"));
      // 성별 확진률 데이터
      setGenderData([
        {
          name: "여성 확진률",
          value: res[9].confCaseRate,
        },
        {
          name: "남성 확진률",
          value: res[10].confCaseRate,
        },
      ]);

      res.map((el) => {
        setAgeData((prev) => [
          ...prev,
          {
            age: el.gubun,
            "연령별 확진자 수(명)": el.confCase,
            "연령별 사망자 수(명)": el.death,
          },
        ]);

        if (el.gubun === "여성") {
          setFemaleConfirmCount(el.confCase);
          setFemaleConfirmPercent(el.confCaseRate);
          setFemaleDeathCount(el.death.toString());
          setFemaleDeathPercent(el.deathRate);
        }

        if (el.gubun === "남성") {
          setMaleConfirmCount(el.confCase);
          setMaleConfirmPercent(el.confCaseRate);
          setMaleDeathCount(el.death.toString());
          setMaleDeathPercent(el.deathRate);
        }
      });
    }
    setIsLoading(false);
  };

  useEffect(() => {
    genderFetchApi();
  }, []);

  return (
    <>
      <GenderContainer isDark={isDark}>
        <GenderStatus isDark={isDark}>
          <TitleContainer>
            <Title isDark={isDark}>남녀 코로나 확진자 현황</Title>
            <SubTitle isDark={isDark}>
              ({standardTime && standardTime}기준)
            </SubTitle>
          </TitleContainer>

          <GenderContentsContainer>
            <GenderCircleGraph>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={genderData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {genderData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </GenderCircleGraph>

            <GenderTextContainer>
              <GenderTextWarp>
                <GenderMaleIcon>
                  <img src={MaleIcon} alt="MaleIcon" />
                </GenderMaleIcon>
                <GenderTextDiv>
                  <p>
                    확진자 :{" "}
                    {maleConfirmCount &&
                      maleConfirmCount
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    명
                  </p>
                  <p>확진률 : {maleConfirmPercent}%</p>
                  <p>
                    사망자 :{" "}
                    {maleDeathCount &&
                      maleDeathCount
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    명
                  </p>
                  <p>사망률 : {maleDeathPercent}%</p>
                </GenderTextDiv>
              </GenderTextWarp>

              <GenderTextWarp>
                <GenderFemaleIcon>
                  <img src={FemaleIcon} alt="FemaleIcon" />
                </GenderFemaleIcon>
                <GenderTextDiv>
                  <p className="female">
                    확진자 :{" "}
                    {femaleConfirmCount &&
                      femaleConfirmCount
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    명
                  </p>
                  <p className="female">확진률 : {femaleConfirmPercent}%</p>
                  <p className="female">
                    사망자 :{" "}
                    {femaleDeathCount &&
                      femaleDeathCount
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    명
                  </p>
                  <p className="female">사망률 : {femaleDeathPercent}%</p>
                </GenderTextDiv>
              </GenderTextWarp>
            </GenderTextContainer>
          </GenderContentsContainer>
        </GenderStatus>

        <AgeStatus isDark={isDark}>
          <TitleContainer>
            <Title isDark={isDark}>연령별 코로나 확진자 현황</Title>
            <SubTitle isDark={isDark}>
              ({standardTime && standardTime}기준)
            </SubTitle>
          </TitleContainer>

          <AgeContainer>
            <AgeWrap>
              <AgeChart>
                <ResponsiveContainer width="100%" height="100%" padding="none">
                  <BarChart
                    width={150}
                    height={40}
                    data={ageData
                      .filter((el) => el.age !== "여성")
                      .filter((el) => el.age !== "남성")}
                  >
                    <XAxis dataKey="age" style={{ fontSize: "0.7rem" }} />
                    <YAxis style={{ fontSize: "0.7rem" }} />
                    <Tooltip />
                    <Legend />
                    <Bar
                      dataKey="연령별 확진자 수(명)"
                      fill={isDark ? "#1334AB" : "#f8f7f9"}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </AgeChart>
            </AgeWrap>

            <AgeWrap>
              <AgeChart>
                <ResponsiveContainer width="100%" height="100%" padding="none">
                  <BarChart
                    width={150}
                    height={40}
                    data={ageData
                      .filter((el) => el.age !== "여성")
                      .filter((el) => el.age !== "남성")}
                  >
                    <XAxis dataKey="age" style={{ fontSize: "0.7rem" }} />
                    <YAxis style={{ fontSize: "0.7rem" }} />
                    <Tooltip />
                    <Legend />
                    <Bar
                      dataKey="연령별 사망자 수(명)"
                      fill={isDark ? "#1334AB" : "#f8f7f9"}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </AgeChart>
            </AgeWrap>
          </AgeContainer>
        </AgeStatus>
      </GenderContainer>
      {isLoading && <Loading />}
    </>
  );
};

export default GenderPage;

const GenderContainer = styled.div`
  position: absolute;
  top: 80px;
  left: 0;
  width: 100%;
  overflow: hidden;
  background: ${(props) => (props.isDark ? "#f8f7f9" : "#222")};
`;
const TitleContainer = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 5px;
`;
const Title = styled.span`
  font-size: 1.1rem;
  font-weight: 900;
  color: ${(props) => (props.isDark ? "#1334AB" : "#f8f7f9")};
`;
const SubTitle = styled.span`
  font-size: 0.5rem;
  margin-left: 5px;
  color: ${(props) => (props.isDark ? "#1334AB" : "#f8f7f9")};
`;

const GenderStatus = styled.div`
  width: 95%;
  height: 250px;
  box-shadow: ${(props) =>
    props.isDark
      ? "0 1px 6px 3px rgba(9, 21, 64, 0.25)"
      : "0 1px 6px 3px rgba(248, 247, 249, 0.25)"};
  border-radius: 5px;
  background: ${(props) => (props.isDark ? "#f8f7f9" : "#222")};
  margin: 30px auto 0;
  box-sizing: border-box;
  padding-top: 5px;
  padding-left: 5px;
  overflow: hidden;
`;
const GenderContentsContainer = styled.div`
  width: calc(100% - 5px);
  height: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const GenderCircleGraph = styled.div`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  text-align: center;
  line-height: 150px;
`;
const GenderTextContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  position: relative;
`;
const GenderTextWarp = styled.div`
  width: 100%;
  height: 45%;
  display: flex;
  position: relative;
`;
const GenderMaleIcon = styled.div`
  width: 32px;
  height: 32px;

  & img {
    width: 100%;
    height: 100%;
  }
`;
const GenderFemaleIcon = styled.div`
  width: 22px;
  height: 34px;

  & img {
    width: 100%;
    height: 100%;
  }
`;
const GenderTextDiv = styled.div`
  position: absolute;
  right: 15px;
  width: 60%;
  height: 100%;
  text-align: left;

  & p {
    margin: 0 0 5px 0;
    font-size: 0.7rem;
    color: #1334ab;
  }

  & .female {
    color: #ff777d;
  }
`;

const AgeStatus = styled.div`
  width: 95%;
  height: 400px;
  overflow: hidden;
  box-shadow: ${(props) =>
    props.isDark
      ? "0 1px 6px 3px rgba(9, 21, 64, 0.25)"
      : "0 1px 6px 3px rgba(248, 247, 249, 0.25)"};
  border-radius: 5px;
  background: ${(props) => (props.isDark ? "#f8f7f9" : "#222")};
  margin: 30px auto;
  box-sizing: border-box;
  padding: 5px 0 5px 5px;
`;
const AgeContainer = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`;
const AgeWrap = styled.div`
  width: calc(100% - 5px);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
`;
const AgeChart = styled.div`
  width: 100%;
  height: 100%;
`;
