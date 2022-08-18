import React from "react";

import styled from "styled-components";
import covidIcon from "../assets/icon/covidIcon.svg";

const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingImage>
        <img src={covidIcon} alt="covidIcon" />
      </LoadingImage>
      <LoadingText>로딩중입니다...</LoadingText>
    </LoadingContainer>
  );
};

export default Loading;

const LoadingContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: #f8f7f9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoadingImage = styled.div`
  width: 100px;
  height: 100px;

  & img {
    width: 100%;
    height: 100%;
  }
`;

const LoadingText = styled.p`
  color: #1334ab;
  font-weight: 900;
  font-size: 1.5rem;
`;
