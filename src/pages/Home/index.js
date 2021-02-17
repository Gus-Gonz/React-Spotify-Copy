import React from "react";
import { StyledDiv } from "./styles";

import SideBar from "../../components/SideBar";
import Player from "../../containers/Player/index";
import Footer from "../../components/Footer/index";

const home = () => {
  return (
    <div>
      <StyledDiv>
        <SideBar />
        <Player />
      </StyledDiv>
      <Footer />
    </div>
  );
};

export default home;
