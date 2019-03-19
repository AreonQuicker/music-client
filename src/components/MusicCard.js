import React, { useState, useEffect, useContext, useCallback } from 'react';

import CurrentSongContext from '../context/CurrentSongContext';
import useSongStatus from '../hooks/useSongStatus';
import {
  setCurrentSong,
  setCurrentSongStatus,
} from '../actions/currentSongActions';
import { MusicCardStyle } from './styles/cardStyles';

// eslint-disable-next-line react/display-name
const MusicCard = React.memo(({ song }) => {
  const {
    currentSongState: { song: currentSong, status: currentSongStatus },
    currentSongDispatch,
  } = useContext(CurrentSongContext);
  const { isPlaying, isPause, isStop, isSelectedSong } = useSongStatus(
    currentSong,
    currentSongStatus,
    song
  );

  useEffect(() => {}, []);

  const handleSongClick = useCallback(() => {
    if (isSelectedSong && isPlaying)
      currentSongDispatch(setCurrentSongStatus('PAUSED'));
    else if (isSelectedSong && (isPause || isStop))
      currentSongDispatch(setCurrentSongStatus('PLAYING'));
    else {
      currentSongDispatch(setCurrentSong(song));
      currentSongDispatch(setCurrentSongStatus('PLAYING'));
    }
  }, [currentSongDispatch, isPause, isPlaying, isSelectedSong, isStop, song]);

  return (
    <MusicCardStyle spin={false} onClick={handleSongClick}>
      <div className="middle">
        <img src="./images/record3.png" />
      </div>
      <div className="bottom">{song.name}</div>
    </MusicCardStyle>
  );
});

export default MusicCard;
