import * as actionTypes from "../actions/actionTypes";

const initState = {
  SpotifyToken: null,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SET_SPOTIFY_TOKEN:
      return {
        ...state,
        SpotifyToken: action.SpotifyToken,
      };

    default:
      return state;
  }
};
