import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <nav>
        <LinksUl>
          <li>
            <NavLink to="/generator">Generator</NavLink>
          </li>
          <li>
            <NavLink to="/favorites">Favorites</NavLink>
          </li>
        </LinksUl>
      </nav>
    </StyledHeader>
  );
};

export default Header;

export const StyledHeader = styled.header.attrs({ className: "header" })`
  background-color: lightblue;
  border-bottom: 1px solid #e4e9e9;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px 0 24.42px;
`;
export const LinksUl = styled.ul.attrs({ className: "links" })`
  display: flex;
  gap: 10px;
`;
