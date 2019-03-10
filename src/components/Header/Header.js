import React from 'react';
import styled, { css } from 'styled-components';

const HeaderStyle = styled.div`
  position: relative;
  background-color: #b42a26;
  height: 60px;
  border-bottom: 2px solid #414042;
  padding: 5px;
  img {
    position: absolute;
    height: 100px;
  }
`;

function Header() {
  return (
    <HeaderStyle>
      <img src="./images/logo3.png" />
    </HeaderStyle>
  );
}

export default Header;
