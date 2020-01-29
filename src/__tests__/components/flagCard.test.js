import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, cleanup } from "@testing-library/react";
import { FlagCard } from "../../components/flagCard";

const history = createMemoryHistory();

afterEach(cleanup)

describe("render without crash", () => {

  test("<FlagCard />", () => {
    const flagCard = render(
      <Router history={history}>
        <FlagCard />
      </Router>
    );
    expect(flagCard).toMatchSnapshot();
  });

});
