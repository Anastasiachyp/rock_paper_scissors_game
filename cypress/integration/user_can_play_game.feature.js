describe("User can play game against the computer", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("User choose Paper", () => {
    cy.get('[data-cy="Paper"]').click();
    cy.get('[data-cy="user-selection"]').should(
      "contain",
      "Your choice: Paper"
    );
    cy.get('[data-cy="computer-selection"]').should("exist");
    cy.get('[data-cy="result-message"]').should("exist");
  });

  it("User choose Scissors", () => {
    cy.get('[data-cy="Scissors"]').click();
    cy.get('[data-cy="user-selection"]').should(
      "contain",
      "Your choice: Scissors"
    );
    cy.get('[data-cy="computer-selection"]').should("exist");
    cy.get('[data-cy="result-message"]').should("exist");
  });

  it("User choose Rock", () => {
    cy.get('[data-cy="Rock"]').click();
    cy.get('[data-cy="user-selection"]').should("contain", "Your choice: Rock");
    cy.get('[data-cy="computer-selection"]').should("exist");
    cy.get('[data-cy="result-message"]').should("exist");
  });

  it("User can see computers choice", () => {
    cy.get("computer-play").should("contain", "Computer choise");
  });

  it("User can see the results", () => {
    cy.get("#results").should("contain", "You win!");
  });
});
