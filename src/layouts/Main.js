import React, { useReducer } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import { ApolloProvider } from 'react-apollo';

import './Main.css';
import gql from 'graphql-tag';
import App from '../views/App/App';
import Dashboard from '../views/Dashboard/Dashboard';
import Header from '../components/Header/Header';
import AppRouter from '../components/Router/AppRouter';
import SongsContext from '../context/SongsContext';
import songsReducer, { songsInitialState } from '../reducers/songsReducer';
import client from '../client/client';

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
  const [state, dispatch] = useReducer(songsReducer, songsInitialState);
  return (
    <React.Fragment>
      <ThemeProvider theme={styledTheme}>
        <MuiThemeProvider theme={theme}>
          <ApolloProvider client={client}>
            <SongsContext.Provider value={{ state, dispatch }}>
              <Header />
              <BodyStyle>
                <AppRouter />
              </BodyStyle>
            </SongsContext.Provider>
          </ApolloProvider>
        </MuiThemeProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default Main;
