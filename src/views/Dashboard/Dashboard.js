import React, { useContext, useEffect } from 'react';
import MusicGrid from '../../components/MusicGrid';
import MusicCard from '../../components/MusicCard';

import SongsContext from '../../context/SongsContext';

function Dashboard() {
  const { songsState } = useContext(SongsContext);
  useEffect(() => {}, []);
  return (
    <MusicGrid>
      {songsState.songs.map(m => (
        <MusicCard key={m.id} song={m} />
      ))}
    </MusicGrid>
  );
}

export default Dashboard;
