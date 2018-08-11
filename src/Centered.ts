import styled from "styled-components";
import { StoryDecorator } from "@storybook/react";
import { decorator, wrap } from "./decorator";

const Centered = styled.div`
  display: flex;
  width: -webkit-fill-available;
  width: -moz-available;
  height: -webkit-fill-available;
  height: -moz-available;
  align-items: center;
  justify-content: center;
`;

export const centered: StoryDecorator = decorator(wrap(Centered));
