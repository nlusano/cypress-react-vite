import App from "./App";

describe("<App />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<App />);

    cy.get('button[data-cy="increment"]')
      .as("incrementButton")
      .should("be.visible")
      .and("contain", "count is 0");
    cy.get("@incrementButton").click();
    cy.get("@incrementButton").should("contain", "count is 1");
  });
});
