import React from "react";
import logo from "../../assets/Logo/spotify-logo.png";
import SideBarElement from "./SideBarElement";
import { connect } from "react-redux";

import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";

import {
  StyledDiv,
  StyledImg,
  StyledLogoWrapper,
  StyledStronTitle,
} from "./styles";

const sideBar = (props) => {
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
      {props.playlists?.items?.map((playlist) => {
        <SideBarElement title={playlist.name} />;
      })}
    </StyledDiv>
  );
};

const mapStateToProps = (state) => {
  return {
    playlists: state.playlists,
  };
};

export default connect(mapStateToProps)(sideBar);
