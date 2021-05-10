import React from "react";
import styled from "styled-components";

import DarkModeToggle from "./DarkModeToggle";

const StyledHeader = styled.header`
  background-color: ${({theme}) => theme.elementColor};
  padding-left: 15px;
  padding-right: 15px;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2);
  transition: background-color 0.2s;
`;

const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: 600;
  
  @media screen and (min-width: 768px){
    font-size: 1.7rem;
  }
`;

const Responsive = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  max-width: 1285px;
  margin-left: auto;
  margin-right: auto;
`

const Header = ({handleTheme, theme}) => {
    return (
        <StyledHeader>
            <Responsive>
                <Title>Where in the world?</Title>
                <DarkModeToggle handleTheme={handleTheme} theme={theme}/>
            </Responsive>
        </StyledHeader>
    )
};

export default Header;