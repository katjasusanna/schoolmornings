import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import Adapter from "enzyme-adapter-react-16";
import { configure, shallow } from "enzyme";
import { declareVariable } from "@babel/types";
import { Route } from "react-router-dom";

configure({ adapter: new Adapter() });

/*test("There is text Text example", () => {
  const { getByText } = render(<App />);
  const content = getByText(/Test example/i);
  expect(content).toBeInTheDocument();
});*/

describe("Testing App", () => {
  //Enzyme enables rendering isolated componentent
  it("Should return four Routes", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Route")).toHaveLength(4);
  });
  /*
  it("Should return two p", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("p")).toHaveLength(2);
  });

  it("Should return one Form element", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Form)).toHaveLength(1);
  });
  */
});
