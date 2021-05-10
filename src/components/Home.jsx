import React, {useState} from "react";
import styled, {css} from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import id from "nanoid";
import {ReactComponent as Spinner} from "../assets/images/spinner.svg"

import {useHttp} from "../hooks/useHttp";
import CardCountry from "./CardCountry";

const outline = () => {
    return css`
    outline: 2px dashed ${({theme}) => theme.textColor};
    outline-offset: 5px;
    position: relative;
    z-index: 20;
`};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  @media screen and (min-width: 768px){ 
    flex-direction: row;
    justify-content: space-between;
    margin-top: 40px;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  box-shadow: 0 5px 10px 1px rgba(0, 0, 0, 0.1);
`;

const InputSearch = styled.input`
  width: 100%;
  background-color: ${({theme}) => theme.elementColor};
  color: ${({theme}) => theme.inputTextColor};
  border: none;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-right: 1rem;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;

  @media screen and (min-width: 768px) {
    width: 480px;
  }
  
  &::placeholder{
    color: inherit
  }

  &:focus{
    ${outline()}
  }
  
  &::-webkit-search-cancel-button {
    appearance: none;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    width: 15px;
    height: 15px;
    background-color: ${({theme}) => theme.textColor};
    clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
    margin-right: 1rem;
    cursor: pointer;
  }
`;

const Button = styled.button`
  background-color: ${({theme}) => theme.elementColor};
  color: ${({theme}) => theme.inputTextColor};
  border: none;
  padding: 1rem 2rem;
  cursor: pointer;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  -webkit-tap-highlight-color: transparent;

  &:focus{
    ${outline()}
  }
`;

const SelectContainer = styled.div`
    position: relative;
    width: min-content;
  
    &::after{
      content: "";
      position: absolute;
      top: 22px;
      right: 15px;
      width: 12px;
      height: 7px;
      z-index: 20;
      color: #000;
      background: ${({theme}) => theme.textColor};
      clip-path: polygon(12% 11%, 48% 72%, 82% 14%, 90% 29%, 48% 100%, 5% 27%);
    }
`;

const Select = styled.select`
  appearance: none;
  background-color: ${({theme}) => theme.elementColor};
  color: ${({theme}) => theme.textColor};
  border: none;
  padding: 1rem;
  border-radius: 5px;
  width: 200px;
  margin-bottom: 1rem;
  box-shadow: 0 5px 10px 1px rgba(0, 0, 0, 0.1);
  
  &:focus{
    ${outline()}
  }
  
  & option{
    margin-top: 1rem;
    border: none;
    border-radius: 5px;
  }
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 500px));
  justify-content: center;
  align-items: start;
  gap: 70px;
  margin-top: 2rem;

  @media screen and (min-width: 1024px){
    grid-template-columns: repeat(auto-fit, minmax(250px, 265px));
    justify-content: space-between;
    margin-top: 3rem;
  }

  @media screen and (min-width: 1220px) {
    justify-content: space-between;
  }
`;

const CenterSpinner = styled(Spinner)`
  grid-column: span 2;
`;

const Title = styled.h2`
  text-align: center;
  grid-column: span 2;
`

const Home = () => {
    const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"]

    const [country, setCountry] = useState("");
    const [region, setRegion] = useState("");
    const [urlParams, setUrlParams] = useState("");
    const [countries, isLoading] = useHttp(`https://restcountries.eu/rest/v2/${urlParams}`);

    const printCountries = () => {
        country.length > 0
            ? setUrlParams(`name/${country}`)
            : setUrlParams("");
    };

    const handleSubmit = e => {
        e.preventDefault();
        printCountries();
    };

    const handleRegion = e => {
        setRegion(e.target.value);

        if (region.length === 0) {
            setUrlParams("");
        } else {
            setUrlParams(`region/${e.target.value}`);
            setCountry("");
        }
    };

    const handleSearch = e => {
        setCountry(e.target.value);
        printCountries();
    };

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <SearchContainer>
                    <InputSearch
                        onChange={handleSearch}
                        type="search"
                        name="search"
                        aria-label={"Search for a country"}
                        placeholder="Search for a country..."
                        value={country}
                    />
                    <Button aria-label={"Search"}>
                        <FontAwesomeIcon aria-hidden={true} icon={faSearch} />
                    </Button>
                </SearchContainer>
                <SelectContainer>
                    <Select value={region} onChange={handleRegion} name="regions" aria-label={"Filter by region"}>
                        <option value="">Filter by region</option>
                        {
                            regions.map(region => (
                                <option key={id()} value={region}>{region}</option>
                            ))
                        }
                    </Select>
                </SelectContainer>
            </Form>
            <Cards aria-live="polite">
                {
                    !isLoading ?
                        countries.length > 0 ? countries.map(country => (
                            <CardCountry
                                countryName={country.name}
                                flag={country.flag}
                                population={country.population}
                                region={country.region}
                                capital={country.capital}
                                alpha3Code={country.alpha3Code}
                                key={id()}
                            />
                        )): (
                            <Title>We did not find any country according to the search</Title>
                        ) : (
                            <CenterSpinner />
                        )
                }
            </Cards>
        </>
    )
};

export default Home;