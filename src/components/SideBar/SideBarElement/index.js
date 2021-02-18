import React from "react";

import { StyledSideBarElement } from "./styles";

const sideBarEle = ({ title, Icon }) => {
  return (
    <StyledSideBarElement>
      {Icon ? <Icon /> : null}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </StyledSideBarElement>
  );
};

export default sideBarEle;
