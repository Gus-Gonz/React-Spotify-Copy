import * as actionTypes from "./actionTypes";

export const setSpotifyData = (token, userData) => {
  return {
    type: actionTypes.SET_SPOTIFY_DATA,
    token,
    userData,
  };
};
