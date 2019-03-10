import React from 'react';
import MusicGrid from '../../components/MusicGrid';
import MusicCard from '../../components/MusicCard';

function Dashboard() {
  return (
    <MusicGrid>
      <MusicCard />
      <MusicCard />
    </MusicGrid>
  );
}

export default Dashboard;
