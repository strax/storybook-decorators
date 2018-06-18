import React from "react";
import background from "../Background";
import { mount } from "enzyme";

const ctx = { kind: "test", story: "test" };

describe("background", () => {
  test("snapshot", () => {
    const rendered = mount(background(
      () => <div>Test case</div>,
      ctx
    ) as JSX.Element);
    expect(rendered).toMatchSnapshot();
  });
});
