import React, { useContext, useEffect } from 'react';
import Sound from 'react-sound';
import CurrentSongContext from '../../context/CurrentSongContext';

import {
  setCurrentSongStatus,
  setCurrentSongPosition,
  setCurrentSongDuration,
  setCurrentSongProgress,
} from '../../actions/currentSongActions';
import { FooterStyle } from '../styles/footerStyles';
import { SongControlsStyle } from '../styles';
import useSongStatus from '../../hooks/useSongStatus';
import SongControls from '../SongControls';

function getPlayStatus(songStatus) {
  return Sound.status[songStatus];
}

function Footer() {
  const {
    currentSongState: { song, status, position, volume },
    currentSongDispatch,
  } = useContext(CurrentSongContext);

  useEffect(() => {}, []);
  const { hasSong, isPlaying, isPause, isStop } = useSongStatus(song, status);
  const playStatus = getPlayStatus(status);

  const handleSongOnFinishedPlaying = () => {
    currentSongDispatch(setCurrentSongStatus('STOPPED'));
    currentSongDispatch(setCurrentSongProgress(0));
  };

  const handleSongOnPlaying = e => {
    const { position: p } = e;
    currentSongDispatch(setCurrentSongPosition(p));
  };

  const handleSongOnLoad = e => {
    const { duration } = e;
    currentSongDispatch(setCurrentSongDuration(duration));
  };

  const handlePauseClick = () => {
    if (isPlaying) currentSongDispatch(setCurrentSongStatus('PAUSED'));
  };

  const handlePlayClick = () => {
    if (hasSong) currentSongDispatch(setCurrentSongStatus('PLAYING'));
  };

  return (
    <FooterStyle>
      <SongControls
        isPlaying={isPlaying}
        handlePlayClick={handlePlayClick}
        handlePauseClick={handlePauseClick}
      />
      <Sound
        url={hasSong ? song.downloadPath : ''}
        playStatus={playStatus}
        onFinishedPlaying={handleSongOnFinishedPlaying}
        onPlaying={handleSongOnPlaying}
        position={position}
        onLoad={handleSongOnLoad}
        volume={volume}
      />
    </FooterStyle>
  );
}

export default Footer;
