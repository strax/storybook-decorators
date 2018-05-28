import React from "react";
import styled, { StyledComponentClass } from "styled-components";
import { StoryDecorator } from "@storybook/react";
import decorator, { wrap } from "./decorator";

export const Centered = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const centered: StoryDecorator = decorator(wrap(Centered));

export default centered;
