import { injectGlobal } from "styled-components";

injectGlobal`
  body {
    margin: 0;
    padding: 0;
  }
`;

export { default as background } from "./Background";
export { default as centered } from "./Centered";
export { default as decorator, wrap, compose } from "./decorator";
