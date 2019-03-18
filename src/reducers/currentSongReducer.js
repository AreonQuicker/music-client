export const currentSongInitialState = {
  song: null,
  status: 'STOPPED',
  position: 0,
  volume: 50,
  progress: 0,
  duration: 0,
};

function currentSongReducer(state, { type, payload }) {
  switch (type) {
    case 'SET_SONG':
      return {
        ...state,
        song: payload,
        progress: 0,
        duration: 0,
        position: 0,
      };
    case 'SET_SONG_STATUS':
      return {
        ...state,
        status: payload,
      };
    case 'SET_SONG_POSITION':
      const progress =
        state.duration > 0 ? (payload / state.duration) * 100 : 0;
      return {
        ...state,
        position: payload,
        progress: progress > 100 ? 100 : progress,
      };
    case 'SET_SONG_PROGRESS':
      return {
        ...state,
        progress: payload,
        position: state.duration > 0 ? (payload / 100) * state.duration : 0,
      };
    case 'SET_SONG_DURATION':
      return {
        ...state,
        duration: payload,
      };
    case 'SET_SONG_VOLUME':
      return {
        ...state,
        volume: payload,
      };
    default:
      return state;
  }
}

export default currentSongReducer;
