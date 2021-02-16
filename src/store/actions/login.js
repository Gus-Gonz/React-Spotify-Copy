import * as actionTypes from "./actionTypes";

export const setSpotifyToken = (token) => {
  console.log(token);
  return {
    type: actionTypes.SET_SPOTIFY_TOKEN,
    SpotifyToken: token,
  };
};
