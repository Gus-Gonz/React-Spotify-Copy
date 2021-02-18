import React from "react";
import { StyledDiv } from "./styles";

import { Grid, Slider } from "@material-ui/core";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
const volumeControl = () => {
  return (
    <StyledDiv>
      <Grid container spacing={2}>
        <Grid item>
          <PlaylistPlayIcon />
        </Grid>
        <Grid item>
          <VolumeDownIcon />
        </Grid>
        <Grid item xs>
          <Slider />
        </Grid>
      </Grid>
    </StyledDiv>
  );
};

export default volumeControl;
