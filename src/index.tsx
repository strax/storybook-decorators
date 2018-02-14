import React from "react";
import { StoryDecorator } from "@storybook/react";
import Background from "./Background";
import Centered from "./Centered";
import Wrapper from "./Wrapper";
import Dimensions from "./Dimensions";

export interface CanvasOptions {
  width?: number;
}

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
