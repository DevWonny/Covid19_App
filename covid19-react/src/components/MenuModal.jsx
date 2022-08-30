import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux/es/exports";

import { dark, light } from "../modules/theme";

import styled from "styled-components";

import HomeIcon from "../assets/icon/HomeIcon.svg";
import MapIcon from "../assets/icon/mapIcon.svg";
import GenderIcon from "../assets/icon/genderIcon.svg";
import DarkActivation from "../assets/icon/DarkActivation.svg";
import LigthActivation from "../assets/icon/LightActivation.svg";

const MenuModal = ({ isMenu, setIsMenu }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // toggle Active
  const toggleActive = useSelector((state) => state.theme.mode);

  // toggle change
  const onToggle = () => {
    if (toggleActive) {
      dispatch(light());
    } else {
      dispatch(dark());
    }

    setIsMenu(false);
  };

  return (
    <MenuWarp>
      <MenuContainer isMenu={isMenu} toggleActive={toggleActive}>
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

        {/* Dark mode Toggle button */}
        <ToggleContainer>
          <input type="checkbox" id="toggle" hidden onClick={onToggle} />
          <ToggleSwitch htmlFor="toggle" toggleActive={toggleActive}>
            <ToggleButton toggleActive={toggleActive}>
              <img
                src={toggleActive ? LigthActivation : DarkActivation}
                alt="dark"
              />
            </ToggleButton>
          </ToggleSwitch>
        </ToggleContainer>
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
  background: ${(props) => (props.toggleActive ? "#f8f7f9" : "#222")};
  position: absolute;
  top: 79px;
  color: ${(props) => (props.toggleActive ? "#1334AB" : "#f8f7f9")};
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
  font-size: 0.9rem;
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

// toggle
const ToggleContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 100px;
  margin-left: 28px;
`;

const ToggleSwitch = styled.label`
  width: 6rem;
  height: 3rem;
  display: block;
  position: relative;
  border-radius: 2rem;
  transition: all 0.2s ease-in;
  background-color: ${(props) => (props.toggleActive ? "#f8f7f9" : "#101010")};
  box-shadow: ${(props) =>
    props.toggleActive
      ? "0 1px 6px 3px rgba(9, 21, 64, 0.25)"
      : "0 1px 6px 3px rgba(248, 247, 249, 0.25)"};
  cursor: pointer;
`;

const ToggleButton = styled.span`
  // button은 toggle보다 작아야함
  width: 2.6rem;
  height: 2.6rem;
  position: absolute;
  top: 50%;
  left: ${(props) => (props.toggleActive ? "0.2rem" : "calc(100% - 2.8rem)")};
  transition: all 0.2s ease-in;
  transform: translateY(-50%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  & img {
    width: 80%;
    height: 80%;
  }
`;
