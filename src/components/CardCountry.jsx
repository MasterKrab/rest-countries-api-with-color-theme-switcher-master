import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

import List from "./List";
import Bold from "./Bold";

const Article = styled.article`
  background-color: ${({theme}) => theme.elementColor};
  border-radius: 0.5rem;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);
  
  @media screen and (min-width: 768px){
    transition: transform 0.2s;
    
    &:hover{
      transform: scale(1.05);
    }
  }
  
  & div{
    padding: 1rem 1.5rem;
  }
`;

const Figure = styled.figure`
  margin: 0;
  
  & img{
    width: 100%;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  position: relative;
  display: inline-block;

  &:focus{
    outline: 3.5px dashed ${({theme}) => theme.textColor};
    outline-offset: 3px;
  }
`;

const CardCountry = ({countryName, flag, population, region, capital, alpha3Code}) => (
    <Article>
        <StyledLink to={`/details/${alpha3Code}`}>
            <Figure>
                <img src={flag} alt={`flag of ${countryName}`}  />
            </Figure>
        </StyledLink>
        <div>
            <h2>
                <StyledLink to={`/details/${alpha3Code}`}>
                    {countryName}
                </StyledLink>
            </h2>
            <List>
                <li><Bold>Population: </Bold>{population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</li>
                <li><Bold>Region: </Bold>{region}</li>
                <li><Bold>Capital: </Bold>{capital}</li>
            </List>
        </div>
    </Article>
);

export default CardCountry;