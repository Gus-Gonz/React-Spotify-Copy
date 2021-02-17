import React, { useEffect } from "react";
import logo from "../../assets/Logo/spotify-logo.svg";

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

      props.spotify.getMe().then((user) => props.onSpotifyLogin(token, user));
    } else {
      return;
    }
  }, [window.location.hash]);

  return (
    <StyledDiv>
      <StyledImg alt="Spotify-Logo" src={logo}></StyledImg>
      <StyledA href={spotifyLoginUrl}>LOGIN WITH SPOTIFY</StyledA>
    </StyledDiv>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSpotifyLogin: (token, userData) =>
      dispatch(loginActions.setSpotifyData(token, userData)),
  };
};

export default connect(null, mapDispatchToProps)(Login);
