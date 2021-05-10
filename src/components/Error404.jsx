import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

import {ReactComponent as LostSvg} from "../assets/images/lost.svg";

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.5rem;
  max-width: 1285px;  
  margin-left: auto;
  margin-right: auto; 
  text-align: center;
  
  @media screen and (min-width: 1024px){
    flex-direction: row;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
`;

const StyledLostSvg = styled(LostSvg)`
  width: 100%;
  max-width: 500px;
  height: 500px;
`;

const BackLink = styled(Link)`
  display: inline-block;
  background-color: ${({theme}) => theme.elementColor};
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);
  color: inherit;
  text-decoration: none;
  padding: 1rem;
  border-radius: 5px;
  margin-top: 1rem;
  
  &:hover{
    text-decoration: underline;
  }
`;

const Error404 = () => {
    return(
        <ErrorContainer>
            <div>
                <Title>404 Not Found</Title>
                <p>We could not find the page you are looking for.</p>
                <BackLink to="/">Back to home</BackLink>
            </div>
            <StyledLostSvg aria-hidden={true}/>
        </ErrorContainer>
    )
};

export default Error404;