import React, { useEffect } from "react";
import logo from "../../assets/Logo/spotify-logo.png";
import { Redirect } from "react-router-dom";

import { StyledDiv, StyledImg, StyledA } from "./styles";
import { spotifyLoginUrl } from "./utills";

import { connect } from "react-redux";
import * as loginActions from "../../store/actions/index";

import { getTokenFromUrl } from "./utills";

const Login = (props) => {
  useEffect(() => {
    if (window.location.hash) {
      const hash = getTokenFromUrl();
      const token = hash.access_token;

      window.location.hash = "";

      props.spotify.setAccessToken(token);

      props.spotify
        .getMe()
        .then((user) => props.setSpotifyUserData(token, user));

      props.spotify.getUserPlaylists().then((playlists) => {
        console.log(playlists);
        props.setSpotifyPlayList(playlists);
      });
    } else {
      return;
    }
  }, [window.location.hash]);

  return props.spotifyToken ? (
    <Redirect to="/Home" />
  ) : (
    <StyledDiv>
      <StyledImg alt="Spotify-Logo" src={logo}></StyledImg>
      <StyledA href={spotifyLoginUrl}>LOGIN WITH SPOTIFY</StyledA>
    </StyledDiv>
  );
};

const mapStateToProps = (state) => {
  return {
    spotifyToken: state.spotifyToken,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSpotifyUserData: (token, userData) =>
      dispatch(loginActions.setSpotifyUserData(token, userData)),
    setSpotifyPlayList: (playlists) =>
      dispatch(loginActions.setSpotifyPlayList(playlists)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
