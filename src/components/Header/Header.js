import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
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
      <React.Fragment>
        <img src="./images/logo3.png" />
        <div style={{ marginLeft: '100px' }}>
          <NavLink to="/dashboard" exact>
            DashBoard
          </NavLink>
          <NavLink to="/create-song" exact>
            create song
          </NavLink>
        </div>
      </React.Fragment>
    </HeaderStyle>
  );
}

export default Header;
