import React from "react";
import logo from "../../assets/Logo/spotify-logo.svg";

import { StyledDiv, StyledImg, StyledA } from "./styles";

const Login = () => {
  return (
    <StyledDiv>
      <StyledImg alt="Spotify-Logo" src={logo}></StyledImg>
      <StyledA>LOGIN WITH SPOTIFY</StyledA>
    </StyledDiv>
  );
};

export default Login;
