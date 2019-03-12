import React, { useContext, useEffect, useState } from 'react';
import { Query } from 'react-apollo';
import MusicGrid from '../../components/MusicGrid';
import MusicCard from '../../components/MusicCard';

import useConnect from '../../hooks/useConnect';
import { GET_ALL_SONGS } from '../../gqlTags/songsQueries';
import { setSongs } from '../../actions/songsActions';

function Dashboard() {
  const {
    state: songsSate,
    action: songsAction,
    loading: songsLoading,
    eror: songsError,
  } = useConnect(GET_ALL_SONGS, {}, setSongs, 'songs2');

  useEffect(() => {
    songsAction();
  }, []);

  return (
    <MusicGrid>
      {songsSate.songs.map(m => (
        <MusicCard key={m.id} />
      ))}
    </MusicGrid>
  );
}

export default Dashboard;
