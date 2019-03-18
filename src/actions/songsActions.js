export const setSongs = songs => ({
  type: 'SET_SONGS',
  payload: songs,
});

export const addSong = song => ({
  type: 'ADD_SONG',
  payload: song,
});
