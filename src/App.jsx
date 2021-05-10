import React, {useState} from "react";
import styled, {ThemeProvider, createGlobalStyle} from "styled-components";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import colors from "./theming/colors";
import Normalize from "react-normalize"
import WebFont from 'webfontloader';

import Header from "./components/Header";
import Home from "./components/Home";
import Details from "./components/Details";
import Error404 from "./components/Error404";

WebFont.load({
    google: {
        families: ["Nunito Sans"]
    },
    custom: {
        families: ['Font Awesome 5 Free'],
        urls: ["https://use.fontawesome.com/releases/v5.15.2/css/all.css"]
    }
});

const GlobalStyle = createGlobalStyle`
  html{
    background-color: ${({theme}) => theme.backgroundColor};
    color: ${({theme}) => theme.textColor};
    font-family: "Nunito Sans", sans-serif;
    box-sizing: border-box;
    transition: background-color 0.2s;
  }
  
  *{
    box-sizing: inherit;
  }
  
  body{
    &::-webkit-scrollbar{
      width: 8px;
    }

    &::-webkit-scrollbar-track{
      background-color: ${({theme}) => theme.elementColor};
    }

    &::-webkit-scrollbar-thumb{
      border-radius: 5px;
      background-color: ${({theme}) => theme.textColor};
    }
  }
  
  img{
    max-width: 100%;
  }
`;

const Main = styled.main`
  display: grid;
  grid-template-columns: minmax(min-content, 1285px);
  justify-content: center;
  padding: 1rem;
`;

const App = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light")

    const handleTheme = () => {
        const currentTheme = theme === "light" ? "dark" : "light";
        setTheme(currentTheme);
        localStorage.setItem("theme", currentTheme);
    };

    return(
        <ThemeProvider theme={theme === "light" ? colors.light : colors.dark}>
            <Normalize />
            <GlobalStyle />
            <Router>
                <Header handleTheme={handleTheme} theme={theme}/>
                <Main>
                    <Switch>
                        <Route exact path="/details/:code" component={Details} />
                        <Route exact path="/" component={Home} />
                        <Route path="/*" component={Error404} />
                    </Switch>
                </Main>
            </Router>
        </ThemeProvider>
    )
};

export default App;