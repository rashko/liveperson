import React from "react";
import { shallow } from "enzyme";
import Title from "./title";

describe("Title", () => {
  it("should render correctly with no props", () => {
    const component = shallow(<Title />);
    expect(component).toMatchSnapshot();
  });

  it("should render correctly with props", () => {
    const title = "this is a test";
    const component = shallow(<Title title={title} />);
    expect(component).toMatchSnapshot();
  });
});
