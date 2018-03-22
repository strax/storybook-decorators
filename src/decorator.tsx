import React, { Fragment } from "react";
import { StoryDecorator, RenderFunction } from "@storybook/react";

export default function decorator(f: StoryDecorator): StoryDecorator {
  return (render, ctx) => {
    if (process.env.NODE_ENV === "test") {
      return <Fragment>{render()}</Fragment>;
    } else {
      return <Fragment>{f(render, ctx)}</Fragment>
    }
  }
}

export const wrap = (Component: React.ComponentType<{}>): StoryDecorator =>
  render => <Component>{render()}</Component>;
