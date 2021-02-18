import React from "react";

import { StyledSideBarElement } from "./styles";

const sideBarEle = ({ title, Icon }) => {
  return (
    <StyledSideBarElement>
      <p>{title}</p>
    </StyledSideBarElement>
  );
};

export default sideBarEle;
