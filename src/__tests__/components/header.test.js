import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Header } from "../../components/header";
import { WELCOME_HOME } from "../../constants/constants";

afterEach(cleanup);
describe("<Header />", () => {
  test("render without crash", () => {
    const header = render(<Header />);
    expect(header).toMatchSnapshot();
  });

  test("testing props", () => {
    const { queryByText } = render(<Header title={WELCOME_HOME} />);
    expect(queryByText(WELCOME_HOME)).toBeTruthy();
  });

});
