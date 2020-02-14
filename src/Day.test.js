import React from "react";
import { render } from "@testing-library/react";
import Adapter from "enzyme-adapter-react-16";
import { configure, shallow } from "enzyme";
import Day from "./components/Day/Day";

configure({ adapter: new Adapter() });

describe("Testing Day", () => {
    
    it("Should return Tasks", () => {
      const wrapper = shallow(<Day />);
      expect(wrapper.find("Tasks")).toHaveLength(1);
    });


    it("Should return hour", () => {
        const wrapper = shallow(<Day />);
        expect(wrapper.find("hour")).toHaveLength(1);
      });

      it("Should return minute", () => {
        const wrapper = shallow(<Day />);
        expect(wrapper.find("minute")).toHaveLength(1);
      });
      
      it("Should return second", () => {
        const wrapper = shallow(<Day />);
        expect(wrapper.find("second")).toHaveLength(1);
      });
      
        it("Links exists", () => {
            const wrapper = shallow(<Day />);
            expect(wrapper.find("Link")).toHaveLength(2);
        });
  
});
