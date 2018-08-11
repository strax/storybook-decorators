import React from "react";
import { mount } from "enzyme";
import { wrap, compose } from "../decorator";

const Wrapper1: React.SFC = props => <div id="wrapper1">{props.children}</div>;
const Wrapper2: React.SFC = props => <div id="wrapper2">{props.children}</div>;
const Wrapper3: React.SFC = props => <div id="wrapper3">{props.children}</div>;

const render = () => <div>wrapped</div>;
const ctx = { kind: "test", story: "test" }

describe("wrap", () => {
  it("returns a decorator that wraps the render function in the given component", () => {
    const rendered = wrap(Wrapper1)(render, ctx);
    expect(mount(rendered as JSX.Element)).toMatchSnapshot();
  });
});

describe("compose", () => {
  it("composes the given decorators from right to left", () => {
    const decorate = compose(wrap(Wrapper1), wrap(Wrapper2), wrap(Wrapper3));
    expect(mount(decorate(render, ctx) as JSX.Element)).toMatchSnapshot();
  });
});
