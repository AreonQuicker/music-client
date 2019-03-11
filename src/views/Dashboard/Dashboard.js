import React, { useContext } from 'react';
import MusicGrid from '../../components/MusicGrid';
import MusicCard from '../../components/MusicCard';
import SongsContext from '../../context/SongsContext';

import { GET_ALL_SONGS } from '../../gqlTags/songsQueries';

import useAPI from '../../hooks/useAPI';

function Dashboard() {
  const [state, error] = useAPI(GET_ALL_SONGS);
  console.log(error);
  return (
    <MusicGrid>
      <MusicCard />
    </MusicGrid>
  );
}

export default Dashboard;
