import styled from "styled-components";

const StyledDiv = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: black;
`;

const StyledImg = styled.img`
  width: 100%;

  @media (min-width: 480px) {
    width: 350px;
  }
`;

const StyledA = styled.a`
  padding: 20px;
  background-color: #1db954;
  border-radius: 100px;
  color: black;
  font-weight: 800;
  text-decoration: none;
`;

export { StyledDiv, StyledImg, StyledA };
