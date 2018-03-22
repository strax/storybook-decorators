import styled from "styled-components";
import tile from "./transparent-tile.svg";
import decorator, { wrap } from "./decorator";

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${tile});
  background-size: 30px 30px;
  background-repeat: repeat;
`;

const background = decorator(wrap(Background));

export default background;
