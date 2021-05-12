import React from "react";
import styled from "styled-components";
import { ReactComponent as Spinner } from "../assets/images/spinner.svg";

const StyledCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 350px));
  justify-content: center;
  align-items: start;
  gap: 70px;
  margin-top: 2rem;
  
  @media screen and (min-width: 1024px){
    grid-template-columns: repeat(auto-fit, minmax(250px, 265px));
    column-gap: 80px;
    margin-top: 3rem;
  }

  @media screen and (min-width: 1300px) {
   column-gap: 50px;
  }

  @media screen and (min-width: 1400px) {
    column-gap: 75px;
  }
`;

const Title = styled.h2`
  text-align: center;
  grid-column: span 2;
`;

const CenterSpinner = styled(Spinner)`
  grid-column: span 2;
`;

const Cards = ({isLoading, children}) => (
    <StyledCards aria-live="polite">
      {
        !isLoading ?
            children.length > 0
                ? children
                : <Title>We did not find any country according to the search</Title>
            : <CenterSpinner />
      }
    </StyledCards>
);

export default Cards;