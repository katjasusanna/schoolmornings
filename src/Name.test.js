import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure, shallow } from "enzyme";
import Name from "./components/Name/Name";

configure({ adapter: new Adapter() });

describe("Form component", () => {

  it("Input field exists", () => {
    const wrapper = shallow(<Name />);
    expect(wrapper.find("input")).toHaveLength(1);
  });

  it("Button exists", () => {
    const wrapper = shallow(<Name />);
    expect(wrapper.find("button")).toHaveLength(1);
  });
/*
  it("The props.name is the default value for the input field", () => {
    const wrapper = shallow(<Form name="VAMK" />);
    console.log(wrapper.find("input").html());
    var x1 = wrapper.find("input"); //last input field
    var x2 = wrapper.find("input").at(0); //first input field
    console.log(x2.props().id);
    expect(x2.props().value).toEqual("VAMK");
  });
  */
});
