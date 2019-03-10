import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';

import './Main.css';
import App from '../views/App/App';
import Dashboard from '../views/Dashboard/Dashboard';
import Header from '../components/Header/Header';
import AppRouter from '../components/Router/AppRouter';

const theme = createMuiTheme({
  typography: { useNextVariants: true },
});

const styledTheme = {
  musicCardHeight: '120px',
  musicCardWidth: '100px',
};

const BodyStyle = styled.div`
  padding: 10px;
  padding-left: 10px;
  padding-top: 60px;
`;

function Main() {
  return (
    <React.Fragment>
      <ThemeProvider theme={styledTheme}>
        <MuiThemeProvider theme={theme}>
          <Header />
          <BodyStyle>
            <AppRouter />
          </BodyStyle>
        </MuiThemeProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default Main;
