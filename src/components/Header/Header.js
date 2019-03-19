import React, { useContext, useCallback, useMemo } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import InputRange from 'react-input-range';

import CurrentSongContext from '../../context/CurrentSongContext';
import {
  setCurrentSongProgress,
  setCurrentSongVolume,
  setCurrentSongStatus,
} from '../../actions/currentSongActions';
import {
  HeaderStyle,
  HeaderMiddleStyle,
  HeaderLeftStlye,
} from '../styles/headerStyles';
import useSongStatus from '../../hooks/useSongStatus';
import SongControls from '../SongControls';
import SongVolumeControlStyle from '../SongVolumeControl';
import 'react-input-range/lib/css/index.css';

function Header() {
  const {
    currentSongState: { progress, song, status, volume },
    currentSongDispatch,
  } = useContext(CurrentSongContext);
  const { songName } = useSongStatus(song, status);

  function handleProgressOnChange(value) {
    currentSongDispatch(setCurrentSongProgress(value));
  }

  return (
    <HeaderStyle>
      <div className="top">
        <HeaderLeftStlye>
          <div className="left">
            <SongControls />
          </div>
          <div className="right">
            <SongVolumeControlStyle />
          </div>
        </HeaderLeftStlye>
        <HeaderMiddleStyle>
          <div className="left">
            <img src="./images/record3.png" />
          </div>
          <div className="right">
            <div className="right__top">{songName}</div>
            <div className="right__bottom">
              <InputRange
                formatLabel={value => ``}
                maxValue={100}
                minValue={0}
                value={progress}
                onChange={handleProgressOnChange}
              />
            </div>
          </div>
        </HeaderMiddleStyle>
        <div />
      </div>
      <div className="bottom">
        <NavLink to="/dashboard" exact>
          Songs
        </NavLink>
        <NavLink to="/create-song" exact>
          Create
        </NavLink>
      </div>
    </HeaderStyle>
  );
}

export default Header;
