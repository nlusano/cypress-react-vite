import { createOvermindMock } from "overmind";
import { Provider } from "overmind-react";
import { CounterOvermind } from "./CounterOvermind";
import { config } from "../overmind";

// err on fetch9ing dynamically imported comp

describe("<CounterOvermind />", () => {
  it("renders", () => {
    const overmind = createOvermindMock(config, (state) => {
      state.count = 0;
    });
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <Provider value={overmind}>
        <CounterOvermind />
      </Provider>
    );

    cy.get("[data-cy=counter]").as("counter").should("have.text", "0");
    cy.get("[data-cy=increment]").as("increment").click();
    cy.get("@counter").should("have.text", "1");
  });
});
