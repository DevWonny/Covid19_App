import React from "react";

import styled from "styled-components";

const MenuModal = ()=>{
    return(
        <MenuWarp>
            <MenuContainer>test</MenuContainer>
        </MenuWarp>
    )
}

export default MenuModal;

const MenuWarp = styled.div`
  width : 100%;
  height : 100vh;
  position : absolute;
  top : 80px;
  left : 0;
  background-color : rgba(0,0,0,.5);
`;

const MenuContainer = styled.div`
  width : 50%;
  height: 100vh;
  background : #F8F7F9;
  position : absolute;
  top : -1px;
`;

