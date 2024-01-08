import { createOvermindMock } from "overmind";
import { Provider } from "overmind-react";
import App from "./App";
import { config } from "./overmind";

describe("<App />", () => {
  it("renders", () => {
    const overmind = createOvermindMock(config, (state) => {
      state.count = 10;
    });

    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <Provider value={overmind}>
        <App />
      </Provider>
    );

    cy.get('button[data-cy="increment-count"]')
      .as("incrementButton")
      .should("be.visible")
      .and("contain", "count is 0");
    cy.get("@incrementButton").click();
    cy.get("@incrementButton").should("contain", "count is 1");
  });
});
