import styled from "styled-components";

export const StyledDiv = styled.div`
  flex: 0.4;
  display: flex;
  align-items: center;
  color: white;
  justify-content: space-between;
  padding: 0 50px;
  max-width: 300px;
  svg {
    padding: 0 2px;
    cursor: pointer;
  }
  svg:hover {
    transition: transform 0.2s ease-in-out;
    transform: scale(1.2) !important;
  }
`;
