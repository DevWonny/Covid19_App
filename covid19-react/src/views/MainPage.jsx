import React from "react";
import styled from "styled-components";
import NextIcon from "../assets/icon/NextIcon.svg";
import GenderIcon from "../assets/icon/genderIcon.svg";
import MapIcon from "../assets/icon/mapIcon.svg";

const MainPage = () => {
  return (
    <MainContainer>
      <LiveStatus>
        <SectionTitleDiv>
          <SectionTitle>실시간 Covid19 현황</SectionTitle>
          <SectionSubTitle>(2022.08.17 19:00 기준)</SectionSubTitle>
        </SectionTitleDiv>

        <LiveContent>
          <LiveGraphDiv>그래프</LiveGraphDiv>

          <LiveTextContent>
            <LiveText>일일 확진자 : 190,000명</LiveText>
            <LiveText>누적 확진자 : 45,000,000명</LiveText>
            <LiveText>사망자 : 30명</LiveText>
            <LiveText>완치자 : 150명</LiveText>
          </LiveTextContent>
        </LiveContent>
      </LiveStatus>

      <SmallStatusContainer>
        <SmallStatus>
          <SmallIcon>
            <img src={GenderIcon} alt="genderIcon" />
          </SmallIcon>
          <SmallTitle>성별 / 연령별 현황</SmallTitle>

          <NextIconDiv>
            <img src={NextIcon} alt="NextIcon" />
          </NextIconDiv>
        </SmallStatus>

        <SmallStatus>
          <SmallIcon>
            <img src={MapIcon} alt="mapIcon" />
          </SmallIcon>
          <SmallTitle>지역별 현황</SmallTitle>

          <NextIconDiv>
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
  overflow: hidden;
  background: #f8f7f9;
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
  justify-content: space-between;
`;
const LiveGraphDiv = styled.div`
  width: 50%;
  height: 100%;
  background: gray;
`;
const LiveTextContent = styled.div`
  width: 45%;
  height: 100%;
  padding-top: 30px;
`;

const LiveText = styled.p`
  font-size: 0.7rem;
  width: 100%;
  height: 20px;
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
