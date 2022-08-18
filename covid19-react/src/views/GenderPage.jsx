import React from "react";
import styled from "styled-components";

import MaleIcon from "../assets/icon/maleIcon.svg";
import FemaleIcon from "../assets/icon/femaleIcon.svg";

const GenderPage = () => {
  return (
    <GenderContainer>
      <GenderStatus>
        <TitleContainer>
          <Title>남녀 코로나 확진자 현황</Title>
          <SubTitle>(2022.08.17 09:00기준)</SubTitle>
        </TitleContainer>

        <GenderContentsContainer>
          <GenderCircleGraph>확진자 현황 그래프</GenderCircleGraph>

          <GenderTextContainer>
            <GenderTextWarp>
              <GenderMaleIcon>
                <img src={MaleIcon} alt="MaleIcon" />
              </GenderMaleIcon>
              <GenderTextDiv>
                <p>확진자 : 20,000명</p>
                <p>확진률 : 57%</p>
                <p>사망자 : 200명</p>
                <p>사망률 : 0.01%</p>
              </GenderTextDiv>
            </GenderTextWarp>

            <GenderTextWarp>
              <GenderFemaleIcon>
                <img src={FemaleIcon} alt="FemaleIcon" />
              </GenderFemaleIcon>
              <GenderTextDiv>
                <p className="female">확진자 : 20,000명</p>
                <p className="female">확진률 : 57%</p>
                <p className="female">사망자 : 200명</p>
                <p className="female">사망률 : 0.01%</p>
              </GenderTextDiv>
            </GenderTextWarp>
          </GenderTextContainer>
        </GenderContentsContainer>
      </GenderStatus>

      <AgeStatus>
        <TitleContainer>
          <Title>연령별 코로나 확진자 현황</Title>
          <SubTitle>(2022.08.17 09:00기준)</SubTitle>
        </TitleContainer>

        <AgeContainer>
          <AgeWrap>
            <AgeChart>확진자</AgeChart>
            <AgeText>연령별 확진자 수(명)</AgeText>
          </AgeWrap>

          <AgeWrap>
            <AgeChart>사망자</AgeChart>
            <AgeText>연령별 사망자 수(명)</AgeText>
          </AgeWrap>
        </AgeContainer>
      </AgeStatus>
    </GenderContainer>
  );
};

export default GenderPage;

const GenderContainer = styled.div`
  position: absolute;
  top: 80px;
  left: 0;
  width: 100%;
  height: calc(100vh - 80px);
  overflow: hidden;
  background: #f8f7f9;
`;
const TitleContainer = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 5px;
`;
const Title = styled.span`
  font-size: 1.1rem;
  font-weight: 900;
  color: #1334ab;
`;
const SubTitle = styled.span`
  font-size: 0.5rem;
  color: #1334ab;
  margin-left: 5px;
`;

const GenderStatus = styled.div`
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
const GenderContentsContainer = styled.div`
  width: calc(100% - 5px);
  height: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const GenderCircleGraph = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: gray;
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
const AgeContainer = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  margin-top: 15px;
`;
const AgeWrap = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const AgeChart = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: lightgray;
  text-align: center;
  line-height: 150px;
  margin-bottom: 15px;
`;
const AgeText = styled.span`
  font-size: 0.9rem;
  font-weight: 900;
  color: #1334ab;
`;
