export const setCurrentSong = song => ({
  type: 'SET_SONG',
  payload: song,
});

export const setCurrentSongStatus = status => ({
  type: 'SET_SONG_STATUS',
  payload: status,
});

export const setCurrentSongPosition = position => ({
  type: 'SET_SONG_POSITION',
  payload: position,
});

export const setCurrentSongProgress = progress => ({
  type: 'SET_SONG_PROGRESS',
  payload: progress,
});

export const setCurrentSongDuration = duration => ({
  type: 'SET_SONG_DURATION',
  payload: duration,
});

export const setCurrentSongVolume = volume => ({
  type: 'SET_SONG_VOLUME',
  payload: volume,
});
