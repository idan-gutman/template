import React from "react";
import styled from "styled-components";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Main>
      <Header />
      <MainPage>
        <Outlet />
      </MainPage>
    </Main>
  );
};

export default Layout;

export const Main = styled.main.attrs({ className: "main" })`
  display: flex;
  flex-direction: column;
  height: 100dvh;
  width: 100%;
`;

export const MainPage = styled.main.attrs({ className: "MainPage" })`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100dvh;
  width: 100%;
  background-color: lightgrey;
  padding: 0 30px;
`;
