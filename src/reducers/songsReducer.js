export const songsInitialState = {
  songs: [],
};

function songsReducer(state, { type, payload }) {
  switch (type) {
    case 'SET_SONGS':
      return {
        ...state,
        songs: payload,
      };
    case 'ADD_SONG':
      return {
        ...state,
        songs: [...state.songs, payload],
      };
    default:
      return state;
  }
}
export default songsReducer;
