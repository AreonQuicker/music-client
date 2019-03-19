import React, { useEffect, useContext, useCallback } from 'react';

import { SongControlsStyle } from './styles';
import CurrentSongContext from '../context/CurrentSongContext';
import { setCurrentSongStatus } from '../actions/currentSongActions';
import useSongStatus from '../hooks/useSongStatus';

// eslint-disable-next-line react/display-name
const SongControls = React.memo(() => {
  const {
    currentSongDispatch,
    currentSongState: { song, status },
  } = useContext(CurrentSongContext);
  const { hasSong, isPlaying } = useSongStatus(song, status);

  const handlePauseClick = useCallback(() => {
    if (isPlaying) currentSongDispatch(setCurrentSongStatus('PAUSED'));
  }, [currentSongDispatch, isPlaying]);

  const handlePlayClick = useCallback(() => {
    if (hasSong) currentSongDispatch(setCurrentSongStatus('PLAYING'));
  }, [currentSongDispatch, hasSong]);

  return (
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
  );
});

export default SongControls;
