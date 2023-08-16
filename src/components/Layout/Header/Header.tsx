import React from 'react'
import styled from 'styled-components';

const Header = () => {
  return (
    <StyledHeader>Header</StyledHeader>
  )
}

export default Header;


export const StyledHeader = styled.header.attrs({ className: 'header' })`
  /* position: fixed;
  z-index: 2; */
  background-color: lightblue;
  border-bottom: 1px solid #e4e9e9;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px 0 24.42px;
`;