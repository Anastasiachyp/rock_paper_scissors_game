describe("User can see game interface", () => {
  it("successfully renders,", () => {
    cy.visit("/");
    cy.contains("Rock,paper and scissors Game");
    cy.get("#rock").click();
  });
});
