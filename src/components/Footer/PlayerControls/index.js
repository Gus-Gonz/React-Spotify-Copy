import React from "react";

import { StyledDiv } from "./styles";

import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";

const playerControl = () => {
  return (
    <StyledDiv>
      <ShuffleIcon />
      <SkipPreviousIcon />
      <PlayCircleOutlineIcon fontSize="large" />
      <SkipNextIcon />
      <RepeatIcon />
    </StyledDiv>
  );
};

export default playerControl;
