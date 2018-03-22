import React from "react";
import styled, { StyledComponentClass } from "styled-components";
import tile from "./transparent-tile.svg";
import decorator, { wrap } from "./decorator";
import { StoryDecorator } from "@storybook/react";

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${tile});
  background-size: 30px 30px;
  background-repeat: repeat;
`;

const background: StoryDecorator = decorator(wrap(Background));

export default background;
