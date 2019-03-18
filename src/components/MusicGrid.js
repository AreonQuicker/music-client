import React, { Children, useEffect } from 'react';
import { MusicGridStyle } from './styles/gridStyles';

function MusicGrid({ children }) {
  useEffect(() => {}, []);
  return <MusicGridStyle>{children}</MusicGridStyle>;
}

export default MusicGrid;
