import React from "react";
import logo from "../../assets/Logo/spotify-logo.png";
import SideBarElement from "./SideBarElement";

import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";

import {
  StyledDiv,
  StyledImg,
  StyledLogoWrapper,
  StyledStronTitle,
} from "./styles";

const sideBar = () => {
  return (
    <StyledDiv>
      <StyledLogoWrapper>
        <StyledImg alt="Spotify-Logo" src={logo} />
      </StyledLogoWrapper>
      <SideBarElement Icon={HomeIcon} title="Home" />
      <SideBarElement Icon={SearchIcon} title="Search" />
      <SideBarElement Icon={LibraryMusicIcon} title="Your Library" />
      <StyledStronTitle>PLAYLISTS</StyledStronTitle>
      <hr />
      <SideBarElement title="Rock" />
      <SideBarElement title="Pop" />
      <SideBarElement title="Reggue" />
    </StyledDiv>
  );
};

export default sideBar;
