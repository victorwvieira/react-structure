import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, cleanup } from "@testing-library/react";
import { BreadCrumbs } from "../../components/breadCrumbs";

const history = createMemoryHistory();

afterEach(cleanup)

describe("render without crash", () => {
  test("<BreadCrumbs />", () => {
    const breadCrumbs = render(
      <Router history={history}>
        <BreadCrumbs />
      </Router>
    );
    expect(breadCrumbs).toMatchSnapshot();
  });
});
