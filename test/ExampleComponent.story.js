// @ts-check

import React from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";
import { background, centered } from "..";

const ExampleComponent = styled.div`
  background: #fff;
  padding: 20px;
`;

storiesOf("ExampleComponent", module)
  .addDecorator(centered)
  .addDecorator(background)
  .add("Default", () => {
    return <ExampleComponent>Hello world, it's me!</ExampleComponent>;
  });
