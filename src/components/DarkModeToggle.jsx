import React from "react";
import styled from "styled-components";

const Input = styled.input`
  appearance: none;
  cursor: pointer;
  
  &::after{
    content: "\\f186";
    font-family: 'Font Awesome 5 Free';
    color: #000;
    transition: color 0.5s;
 }
  
  &:checked::after{
     color: #fff;
     font-weight: 800;
  }
`;

const Label = styled.label`
  font-weight: 600;
  margin-left: 0.5rem;
  cursor: pointer;
`;

const Header = ({handleTheme, theme}) => {
    return (
        <div>
            <Input
                onChange={handleTheme}
                defaultChecked={theme === "dark"}
                id="dark-mode"
                type="checkbox"
                name="dark-mode"
            />
            <Label htmlFor="dark-mode">Dark mode</Label>
        </div>
    )
};

export default Header;