import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure, shallow } from "enzyme";
import Timeschedule from "./components/Timeschedule/Timeschedule";

configure({ adapter: new Adapter() });

describe("Form component", () => {
 
  it("Table exists", () => {
    const wrapper = shallow(<Timeschedule />);
    expect(wrapper.find("table")).toHaveLength(1);
  });
  it("Five tableheadings exists", () => {
    const wrapper = shallow(<Timeschedule />);
    expect(wrapper.find("td")).toHaveLength(5);
  });
});