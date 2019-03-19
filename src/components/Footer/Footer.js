import React, { useContext, useEffect, useCallback } from 'react';
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

  const { hasSong } = useSongStatus(song, status);
  const playStatus = getPlayStatus(status);

  const handleSongOnFinishedPlaying = useCallback(() => {
    currentSongDispatch(setCurrentSongStatus('STOPPED'));
    currentSongDispatch(setCurrentSongProgress(0));
  }, [currentSongDispatch]);

  function handleSongOnPlaying(e) {
    const { position: p } = e;
    currentSongDispatch(setCurrentSongPosition(p));
  }

  function handleSongOnLoad(e) {
    const { duration } = e;
    currentSongDispatch(setCurrentSongDuration(duration));
  }

  return (
    <FooterStyle>
      <SongControls />
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
