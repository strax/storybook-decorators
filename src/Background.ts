import styled from "styled-components";

export default styled.div`
  width: 100vw;
  height: 100vh;
  --tile-size: 30px;
  --tile-color: #fafafa;
  background-image: linear-gradient(
      45deg,
      var(--tile-color) 25%,
      transparent 25%
    ),
    linear-gradient(-45deg, var(--tile-color) 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, var(--tile-color) 75%),
    linear-gradient(-45deg, transparent 75%, var(--tile-color) 75%);
  background-size: var(--tile-size) var(--tile-size);
  background-position: 0 0, 0 calc(var(--tile-size) / 2),
    calc(var(--tile-size) / 2) calc(var(--tile-size) / 2 * -1),
    calc(var(--tile-size) / 2 * -1) 0px;
`;
