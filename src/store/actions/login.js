import * as actionTypes from "./actionTypes";

export const setSpotifyUserData = (token, userData) => {
  return {
    type: actionTypes.SET_SPOTIFY_USER_DATA,
    token,
    userData,
  };
};

export const setSpotifyPlayList = (playLists) => {
  return {
    type: actionTypes.SET_SPOTIFY_PLAY_LIST,
    playLists,
  };
};
