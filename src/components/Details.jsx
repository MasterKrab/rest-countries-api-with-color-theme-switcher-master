import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useHttp } from "../hooks/useHttp";
import apiUrl from '../utils/apiUrl'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import id from "nanoid";
import { ReactComponent as Spinner } from "../assets/images/spinner.svg";

import List from "./List";
import Bold from "./Bold";

const Responsive = styled.div`
  max-width: 1285px;
  margin-left: auto;
  margin-right: auto;
`;

const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 135px;
  height: 40px;
  background-color: ${({theme}) => theme.elementColor};
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);
  color: ${({theme}) => theme.textColor};
  text-decoration: none;
  padding: 0.5rem;
  border-radius: 5px;
  margin-top: 70px;
  margin-bottom: 70px;
  transition: background-color 0.2s;
  
  & svg{
    color: inherit;
    margin-right: 0.5rem;
  }
`;

const Article = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 2rem;
  margin-bottom: 5rem;
  
  @media screen and (min-width: 1024px){
    grid-template-columns: repeat(2, 1fr);  
    gap: 150px;
  }
`;

const Title = styled.h2`
  font-size: 2.3rem;
  margin-bottom: 0.5rem;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContainerList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  
  @media screen and (min-width: 1024px){
    flex-direction: row;  
    gap: 30px;
  }

  @media screen and (min-width: 1220px){
    gap: 115px;
  }
`;

const BorderContainer = styled.div`
  margin-top: auto;
  margin-bottom: 1rem;
  
  @media screen and (min-width: 1024px){
    display: flex;
  }
`;

const BorderList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  list-style: none;
  padding-left: 0;

  @media screen and (min-width: 1024px){
    margin-left: 1rem;
    width: 70%;
  }
`;

const BorderLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100px;
  height: 30px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  background-color: ${({theme}) => theme.elementColor};
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);
  color: inherit;
  text-decoration: none;
  border-radius: 5px;
`;

const Details = ({match, history}) => {
    const [country, isLoading] = useHttp(`${apiUrl}/alpha/${match.params.code}`);
    const [countries, isCountriesLoading] = useHttp(`${apiUrl}/all`);

    country.status === 400 && history.push("/not-found")

    const {
        name,
        flag,
        nativeName,
        population,
        region,
        capital,
        subregion,
        topLevelDomain,
        currencies,
        languages,
        borders
    } = country;

    return (
        <Responsive>
            <BackLink to="/">
                <FontAwesomeIcon icon={faArrowLeft} aria-hidden={true} />
                Back
            </BackLink>
            {

                !isLoading ? (
                    <Article>
                        <img src={flag} alt={`flag of ${name}`}  />
                        <DetailsContainer>
                            <Title>{name}</Title>
                            <ContainerList>
                                <List>
                                    <li><Bold>Native Name: </Bold>{nativeName}</li>
                                    <li><Bold>Population: </Bold>{population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</li>
                                    <li><Bold>Region: </Bold>{region}</li>
                                    <li><Bold>Sub Region: </Bold>{subregion}</li>
                                    {capital && <li><Bold>Capital: </Bold>{capital}</li>}
                                </List>
                                <List>
                                    <li><Bold>Top Level Domain: </Bold>{topLevelDomain}</li>
                                    {currencies && <li><Bold>Currencies: </Bold>{currencies.map(currency => currency.name).join(", ")}</li>}
                                    <li><Bold>Languages: </Bold>{languages.map(language => language.name).join(", ")}</li>
                                </List>
                            </ContainerList>
                            {
                                borders?.length && (
                                    <BorderContainer>
                                        <h3>Border countries: </h3>
                                        <BorderList>
                                            {
                                                !isCountriesLoading && (
                                                    borders.map(border => {
                                                        const country = countries.find(country => country.alpha3Code === border)

                                                        return (
                                                            <li key={id()}><BorderLink to={border}>{country.name}</BorderLink></li>
                                                        )
                                                    })
                                                )
                                            }
                                        </BorderList>
                                    </BorderContainer>
                                )
                            }

                        </DetailsContainer>
                    </Article>
                ) : (
                    <Spinner />
                )
            }
        </Responsive>
    )
};

export default Details;