// @ts-check

import React from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";
import { background, centered, compose, width } from "..";

const ExampleComponent = styled.div`
  background: #fff;
  padding: 20px;
`;

const decorate = compose(background, centered, width(500));

storiesOf("ExampleComponent", module)
  .addDecorator(decorate)
  .add("Default", () => {
    return <ExampleComponent>Hello world, it's me!</ExampleComponent>;
  });
