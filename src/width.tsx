import React from "react";
import { StoryDecorator } from "@storybook/react";

export function width(px: number): StoryDecorator {
  return (story) => (
    <div style={{width: px}}>{story()}</div>
  )
}
