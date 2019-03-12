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
    default:
      return state;
  }
}

export default songsReducer;
