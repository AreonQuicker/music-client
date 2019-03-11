export const songsInitialState = {};

function songsReducer(state, action) {
  switch (action.type) {
    case 'add':
      return {
        value: 'MEE',
      };
    default:
      return state;
  }
}

export default songsReducer;
