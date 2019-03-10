import React, { Children } from 'react';
import { MusicGridStyle } from './styles';

function MusicGrid({ children }) {
  return <MusicGridStyle>{children}</MusicGridStyle>;
}

export default MusicGrid;
