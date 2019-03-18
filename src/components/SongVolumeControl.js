import React from 'react';
import styled from 'styled-components';
import InputRange from 'react-input-range';

const SongVolumeControlStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
`;

function SongVolumeControl({ volume, handleVolumeOnChange }) {
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
}

export default SongVolumeControl;
