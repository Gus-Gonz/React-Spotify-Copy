import * as actionTypes from "../actions/actionTypes";

const initState = {
  spotifyToken: null,
  authenticated: false,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SET_SPOTIFY_TOKEN:
      return {
        ...state,
        spotifyToken: action.SpotifyToken,
        authenticated: true,
      };

    default:
      return state;
  }
};

export default reducer;
