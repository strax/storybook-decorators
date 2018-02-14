import * as React from "react";
import styled from "styled-components";
import ResizeObserver from "resize-observer-polyfill";

const Container = styled.div`
  position: absolute;
  box-sizing: border-box;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.05);
  color: #888;
  z-index: 999;
  top: -2px;
  transform: translateY(-100%);
  right: -2px;
  font-family: "SF Mono";
  padding: 5px;
`;

const Reset = styled.div`
  all: initial;
`;

interface State {
  dimensions?: { width: number; height: number };
}

export default class Dimensions extends React.Component<{}, State> {
  state: State = {};

  mutationObserver: ResizeObserver;
  node: HTMLDivElement | null;

  componentDidMount() {
    if (this.node) {
      this.mutationObserver = new ResizeObserver(this.onResize.bind(this));
      this.mutationObserver.observe(this.node);
    }
  }

  render() {
    return (
      <>
        {this.state.dimensions && (
          <Container>
            {this.state.dimensions.width} &times; {this.state.dimensions.height}{" "}
            px
          </Container>
        )}
        <div ref={_ => (this.node = _)}>
          <Reset>{this.props.children}</Reset>
        </div>
      </>
    );
  }

  private onResize() {
    if (this.node) {
      const bb = this.node.getBoundingClientRect();
      this.setState({ dimensions: { width: bb.width, height: bb.height } });
    }
  }
}
