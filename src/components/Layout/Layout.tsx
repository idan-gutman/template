import React from "react";
import styled from "styled-components";
import Header from "./Header/Header";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <Main>
      <Header />
        <div>page</div>
      <Footer />
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
