import styled from "styled-components";

export const StyledDiv = styled.div`
  border: 1px solid black;
  height: 100vh;
  flex: 0.2;
  background: #040404;
  color: white;
  min-width: 220px;
  padding: 0px 20px;

  hr {
    border: 1px solid #282828;
    width: 90%;
    margin: 10px auto;
  }
`;

export const StyledImg = styled.img`
  margin: auto;
  object-fit: contain;
  padding: 10px;
  height: 80px;
`;

export const StyledLogoWrapper = styled.div`
  text-align: center;
`;

export const StyledStronTitle = styled.strong`
  margin-left: 10px;
  padding: 5px;
  font-size: 12px;
`;
