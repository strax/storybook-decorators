// @ts-check

import React from "react";
import { storiesOf } from "@storybook/react";
import canvas from "../dist";
import styled from "styled-components";

const ExampleComponent = styled.div`
  background: #fff;
  padding: 20px;
`;

storiesOf("ExampleComponent", module)
  .addDecorator(canvas())
  .add("Default", () => {
    return <ExampleComponent>Hello world, it's me!</ExampleComponent>;
  });
