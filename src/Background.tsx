import React from "react";
import styled, { StyledComponentClass } from "styled-components";
import decorator, { wrap } from "./decorator";
import { StoryDecorator } from "@storybook/react";
import ReactDOMServer from "react-dom/server";

const Tile = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path fill="#FFF" d="M0 0h60v60H0z"/><path d="M0 0h30v30H0V0zm30 30h30v30H30V30z" fill="#F8F8F8"/></svg>

const tile = "data:image/svg+xml," + escape(ReactDOMServer.renderToStaticMarkup(<Tile />));

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${tile});
  background-size: 30px 30px;
  background-repeat: repeat;
`;

const background: StoryDecorator = decorator(wrap(Background));

export default background;
