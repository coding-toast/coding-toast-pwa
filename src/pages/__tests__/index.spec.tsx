import * as React from "react";
import { mount } from "enzyme";
import HomePage from "../index";

describe("Pages", () => {
  describe("Index", () => {
    it("should render without throwing an error", function () {
      const wrapper = mount(<HomePage />);
      expect(wrapper.html()).toMatchSnapshot();
    });
  });
});
