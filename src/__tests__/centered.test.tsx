import React from "react";
import { mount } from "enzyme";
import { centered } from "..";

const ctx = { kind: "test", story: "test" };

describe("centered", () => {
  test("snapshot", () => {
    const rendered = mount(centered(
      () => <div>Test case</div>,
      ctx
    ) as JSX.Element);
    expect(rendered).toMatchSnapshot();
  });
});
