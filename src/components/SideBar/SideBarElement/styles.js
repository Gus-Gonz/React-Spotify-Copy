import styled from "styled-components";

export const StyledSideBarElement = styled.div`
  align-items: center;
  display: flex;
  color: grey;
  padding: 10px 0;
  margin: 10px 0;
  cursor: pointer;
  transition: ease-in color 250ms;

  &:hover {
    color: white;
  }

  svg {
    padding: 0px 10px;
  }

  p {
    margin-left: 10px;
    font-size: 14px;
  }
`;
