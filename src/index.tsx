import React from "react";
import { StoryDecorator } from "@storybook/react";
import { injectGlobal } from "styled-components";

injectGlobal`
  body {
    margin: 0;
    padding: 0;
  }
`;

export { default as background } from "./background";
export { default as centered } from "./centered";
export { default as decorator, wrap } from "./decorator";
