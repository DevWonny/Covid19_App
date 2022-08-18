import React, { useEffect, useState } from "react";

import styled from "styled-components";

import { format } from "date-fns";

import MenuModal from "./MenuModal";

const Header = () => {
  // 실시간 날짜 및 시간
  const [todayDate, setTodayDate] = useState("");
  const [realTime, setRealTime] = useState("");

  // menu modal
  const [isMenu, setIsMenu] = useState(false);

  useEffect(() => {
    setTodayDate(format(new Date(), "yyyy.MM.dd"));
    setInterval(() => {
      setRealTime(format(new Date(), "p"));
    }, 1000);
  }, []);

  return (
    <>
      <HeaderContainer isMenu={isMenu}>
        <Hamburger
          onClick={() => {
            setIsMenu(!isMenu);
          }}
        >
          <LineTop isMenu={isMenu}></LineTop>
          <LineMiddle isMenu={isMenu}></LineMiddle>
          <LineBottom isMenu={isMenu}></LineBottom>
        </Hamburger>

        <Title>Careful Covid</Title>
        <DateWarp>
          <p>{todayDate}</p>
          <p>{realTime}</p>
        </DateWarp>
      </HeaderContainer>
      {isMenu && <MenuModal />}
    </>
  );
};

export default Header;

const HeaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background: #f8f7f9;
  box-shadow: ${(props) =>
    !props.isMenu && "0 4px 11px -1px rgba(9, 21, 64, 0.25)"};
  color: #091540;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Hamburger = styled.div`
  width: 24px;
  height: 24px;
  margin-left: 28px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LineTop = styled.span`
  position: absolute;
  width: 24px;
  height: 4px;
  background-color: #000;
  border-radius: 3px;
  transition: transform 0.25s, opacity 0.35s;
  transform: ${(props) =>
    props.isMenu ? "rotate(45deg)" : "translateY(-7px)"};
`;

const LineMiddle = styled.span`
  position: absolute;
  width: 24px;
  height: 4px;
  background-color: #000;
  border-radius: 3px;
  transition: transform 0.25s, opacity 0.35s;
  transform: ${(props) => props.isMenu && "translateX(16px)"};
  opacity: ${(props) => props.isMenu && "0"};
`;

const LineBottom = styled.span`
  position: absolute;
  width: 24px;
  height: 4px;
  background-color: #000;
  border-radius: 3px;
  transition: transform 0.25s, opacity 0.35s;
  transform: ${(props) =>
    props.isMenu ? "rotate(-45deg)" : "translateY(7px)"};
`;

const Title = styled.p`
  font-weight: bold;
  font-size: 24px;
  margin-left: 28px;
`;

const DateWarp = styled.div`
  width: 80px;
  height: 30px;
  margin-right: 6px;
  font-size: 14px;
  font-weight: 900;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  & p {
    margin: 0;
  }
`;
