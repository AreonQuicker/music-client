import React from 'react';

import { SongControlsStyle } from './styles';

// eslint-disable-next-line react/display-name
const SongControls = React.memo(
  ({ handlePauseClick, handlePlayClick, isPlaying }) => (
    <SongControlsStyle>
      <div />
      <div className="middle">
        {isPlaying ? (
          <i onClick={handlePauseClick} className="material-icons">
            pause
          </i>
        ) : (
          <i onClick={handlePlayClick} className="material-icons">
            play_arrow
          </i>
        )}
      </div>
      <div />
    </SongControlsStyle>
  )
);

export default SongControls;
