import React from "react";
import styled from "styled-components";

const Footer = () => {
  return <StyledFooter />;
};

export default Footer;

export const StyledFooter = styled.footer.attrs({ className: "Footer" })`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: lightcyan;
`;
