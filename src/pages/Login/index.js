import React from "react";
import logo from "../../assets/Logo/spotify-logo.svg";

import { StyledDiv, StyledImg, StyledA } from "./styles";
import { spotifyLoginUrl } from "./utills";

const Login = () => {
  return (
    <StyledDiv>
      <StyledImg alt="Spotify-Logo" src={logo}></StyledImg>
      <StyledA href={spotifyLoginUrl}>LOGIN WITH SPOTIFY</StyledA>
    </StyledDiv>
  );
};

export default Login;
