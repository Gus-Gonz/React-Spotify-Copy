import React from "react";

import { StyledFooter } from "./styles";
import PlayerControl from "./PlayerControls/index";
import VolumeControl from "./VolumeControl/index";
import SongDetails from "./SongDetails/index";
const footer = () => {
  return (
    <StyledFooter>
      <SongDetails />
      <PlayerControl />
      <VolumeControl />
    </StyledFooter>
  );
};

export default footer;
