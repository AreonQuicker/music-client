import React, { useEffect, useContext, useMemo } from 'react';
import styled from 'styled-components';
import InputRange from 'react-input-range';

import CurrentSongContext from '../context/CurrentSongContext';
import { setCurrentSongVolume } from '../actions/currentSongActions';

const SongVolumeControlStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
`;

// eslint-disable-next-line react/display-name
const SongVolumeControl = React.memo(() => {
  const {
    currentSongState: { volume },
    currentSongDispatch,
  } = useContext(CurrentSongContext);

  function handleVolumeOnChange(value) {
    currentSongDispatch(setCurrentSongVolume(value));
  }

  useEffect(() => {}, []);

  return (
    <SongVolumeControlStyle>
      <InputRange
        onChange={handleVolumeOnChange}
        formatLabel={value => ``}
        maxValue={100}
        minValue={0}
        value={volume}
      />
    </SongVolumeControlStyle>
  );
});

export default SongVolumeControl;
