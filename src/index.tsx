import React from "react";
import { StoryDecorator } from "@storybook/react";
import Background from "./Background";
import Centered from "./Centered";
import Wrapper from "./Wrapper";
import Dimensions from "./Dimensions";
import { injectGlobal } from "styled-components";

export interface CanvasOptions {
  width?: number;
}

injectGlobal`
  body {
    margin: 0;
    padding: 0;
  }
`;

export default function canvas(options: CanvasOptions = {}): StoryDecorator {
  return (render, ctx) => {
    return (
      <Background>
        <Centered>
          <Wrapper>
            <Dimensions>{render()}</Dimensions>
          </Wrapper>
        </Centered>
      </Background>
    );
  };
}
