import React from "react";

import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import HomeIcon from "../assets/icon/HomeIcon.svg";
import MapIcon from "../assets/icon/mapIcon.svg";
import GenderIcon from "../assets/icon/genderIcon.svg";

const MenuModal = ({ isMenu, setIsMenu }) => {
  const navigate = useNavigate();

  return (
    <MenuWarp>
      <MenuContainer isMenu={isMenu}>
        <MenuButton
          onClick={() => {
            navigate("/");
            setIsMenu(false);
          }}
        >
          <MenuButtonIcon>
            <img src={HomeIcon} alt="Home Icon" />
          </MenuButtonIcon>
          Home
        </MenuButton>

        <MenuButton
          onClick={() => {
            navigate("/mapPage");
            setIsMenu(false);
          }}
        >
          <MenuButtonIcon>
            <img src={MapIcon} alt="Map Icon" />
          </MenuButtonIcon>
          지역별 현황
        </MenuButton>

        <MenuButton
          onClick={() => {
            navigate("/genderPage");
            setIsMenu(false);
          }}
        >
          <MenuButtonIcon>
            <img src={GenderIcon} alt="Gender Icon" />
          </MenuButtonIcon>
          성별 / 연령별 현황
        </MenuButton>
      </MenuContainer>
    </MenuWarp>
  );
};

export default MenuModal;

const MenuWarp = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 8;
  overflow: hidden;
`;

const MenuContainer = styled.div`
  width: 50%;
  height: 100vh;
  background: #f8f7f9;
  position: absolute;
  top: 79px;
  color: #091540;
`;

const MenuButton = styled.div`
  width: 100%;
  height: 50px;
  font-weight: 700;
  margin-bottom: 10px;
  text-align: left;
  line-height: 50px;
  display: flex;
  align-items: center;
`;

const MenuButtonIcon = styled.div`
  width: 24px;
  height: 24px;
  position: relative;
  margin-left: 28px;
  margin-right: 10px;

  & img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;
