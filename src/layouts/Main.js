import React, { useReducer, useEffect, useContext } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import { ApolloProvider } from 'react-apollo';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';

import './Main.css';
import Header from '../components/Header/Header';
import AppRouter, { history } from '../components/Router/AppRouter';
import SongsContext from '../context/SongsContext';
import CurrentSongContext from '../context/CurrentSongContext';
import songsReducer, { songsInitialState } from '../reducers/songsReducer';
import currentSongReducer, {
  currentSongInitialState,
} from '../reducers/currentSongReducer';
import client from '../client/client';
import useQueryAPI from '../hooks/useQueryAPI';
import { GET_ALL_SONGS } from '../gqlTags/songsQueries';
import { setSongs } from '../actions/songsActions';
import Footer from '../components/Footer/Footer';

const theme = createMuiTheme({
  typography: { useNextVariants: true },
});

const styledTheme = {
  musicCardHeight: '220px',
  musicCardWidth: '200px',
  headerHeight: '65px',
  footerHeight: '50px',
};

const BodyStyle = styled.div`
  background-color: #ffffff;
  padding: 10px;
  height: calc(
    100vh - ${props => props.theme.headerHeight} -
      ${props => props.theme.footerHeight}
  );
`;

function Main() {
  const [songsState, songsDispatch] = useReducer(
    songsReducer,
    songsInitialState
  );
  const [currentSongState, currentSongDispatch] = useReducer(
    currentSongReducer,
    currentSongInitialState
  );
  const { state: songsQueryState } = useQueryAPI(GET_ALL_SONGS, null, true);

  useEffect(() => {
    const { data: { songs2: songs = null } = {} } = songsQueryState || {};
    if (songs) {
      songsDispatch(setSongs(songs));
    }
  }, [songsQueryState]);

  return (
    <React.Fragment>
      <ThemeProvider theme={styledTheme}>
        <MuiThemeProvider theme={theme}>
          <ApolloProvider client={client}>
            <CurrentSongContext.Provider
              value={{ currentSongState, currentSongDispatch }}
            >
              <SongsContext.Provider value={{ songsState, songsDispatch }}>
                <Router history={history}>
                  <React.Fragment>
                    <Header />
                    <BodyStyle>
                      <AppRouter />
                    </BodyStyle>
                    <Footer />
                  </React.Fragment>
                </Router>
              </SongsContext.Provider>
            </CurrentSongContext.Provider>
          </ApolloProvider>
        </MuiThemeProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default Main;
