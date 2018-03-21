import styled from "styled-components";
import background from "./transparent-tile.svg";

export default styled.div`
  width: 100vw;
  height: 100vh;
  --tile-size: 30px;
  --tile-color: #fafafa;
  background-image: url(${background});
  background-size: 30px 30px;
  background-repeat: repeat;
`;
