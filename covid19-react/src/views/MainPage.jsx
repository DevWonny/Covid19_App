import React from "react";
import styled from "styled-components";
import NextIcon from "../assets/icon/NextIcon.svg";

const MainPage = () => {
  return (
    <MainContainer>
      <LiveStatus>
        <LiveTitleDiv>
          <LiveTitle>실시간 Covid19 현황</LiveTitle>
          <LiveSubTitle>(2022.08.17 19:00 기준)</LiveSubTitle>
        </LiveTitleDiv>

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
          연령별
          <NextIconDiv>
            <img src={NextIcon} alt="NextIcon" />
          </NextIconDiv>
        </SmallStatus>
        <SmallStatus>
          지역별
          <NextIconDiv>
            <img src={NextIcon} alt="NextIcon" />
          </NextIconDiv>
        </SmallStatus>
      </SmallStatusContainer>

      <DeathStatus>사망자 현황</DeathStatus>
    </MainContainer>
  );
};

export default MainPage;

const MainContainer = styled.div`
  position: absolute;
  top: 80px;
  left: 0;
  width: 100%;
  height: calc(100vh - 80px);
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

const LiveTitleDiv = styled.div`
  width: 100%;
  height: 20px;
  line-height: 20px;
`;
const LiveTitle = styled.span`
  font-weight: 900;
  font-size: 18px;
  color: #1334ab;
`;
const LiveSubTitle = styled.span`
  font-size: 12px;
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
  font-size: 13px;
  padding-top: 30px;
`;

const LiveText = styled.p`
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
  height: 300px;
  box-shadow: 0 1px 6px 3px rgba(9, 21, 64, 0.25);
  border-radius: 5px;
  background: #f8f7f9;
  margin: 30px auto 0;
  box-sizing: border-box;
`;
