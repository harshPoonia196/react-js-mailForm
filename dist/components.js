import * as React from "react";
import { render } from "@testing-library/react";
import "jest-canvas-mock";
import { MyCounter } from "../src";
describe("Common render", () => {
  it("renders without crashing", () => {
    render( /*#__PURE__*/React.createElement(MyCounter, null));
  });
});