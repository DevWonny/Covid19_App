import React, {useEffect, useState} from "react";

import styled from "styled-components";

import {format} from "date-fns";

import Menu from "../assets/icon/Menu.svg";

const Header = ()=>{
    // 실시간 날짜 및 시간
    const [todayDate, setTodayDate]= useState('');
    const [realTime, setRealTime] = useState('');

    useEffect(()=>{
        setTodayDate(format(new Date(), 'yyyy.MM.dd'));
        setInterval(()=>{
            setRealTime(format(new Date(),'p'));
        },1000)
    },[])

    return(
        <HeaderContainer>
            <MenuIcon>
                <img src={Menu} alt="Menu Icon"/>
            </MenuIcon>
            <Title>Careful Covid</Title>
            <DateWarp>
                <p>{todayDate}</p>
                <p>{realTime}</p>
            </DateWarp>
        </HeaderContainer>

    )
}

export default Header;

const HeaderContainer = styled.div`
  position : absolute;
  top : 0;
  left : 0;
  width : 100%;
  height : 80px;
  background : #F8F7F9;
  box-shadow: 0 4px 11px -1px rgba(9, 21, 64, 0.25);
  color : #091540;
  display: flex;
  justify-content: space-between;
  align-items : center;
`;

const MenuIcon = styled.div`
  width : 24px;
  height : 24px;
  margin-left : 28px;
  & img{
    width : 100%;
    height : 100%;
  }
`;

const Title = styled.p`
  font-weight : bold;
  font-size : 24px;
  margin-left : 28px;
`;

const DateWarp = styled.div`
  width : 80px;
  height : 30px;
  margin-right : 6px;
  font-size : 14px;
  font-weight: 900;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  & p{
    margin : 0;
  }
`;


