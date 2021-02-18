import React from "react";
import logo from "../../assets/Logo/spotify-logo.png";
import SideBarElement from "./SideBarElement";

import { StyledDiv, StyledImg, StyledLogoWrapper } from "./styles";

const sideBar = () => {
  return (
    <StyledDiv>
      <StyledLogoWrapper>
        <StyledImg src={logo} />
      </StyledLogoWrapper>
      <SideBarElement title="Home" />
      <SideBarElement title="Search" />
      <SideBarElement title="Your Library" />
    </StyledDiv>
  );
};

export default sideBar;
