describe("User can play game against the computer", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000");
    });

    it("User choose Paper", () => {
        cy.get("button#paper").should("contain", "Paper")
    });
    
    it("User choose Scissors", () => {
        cy.get("button#scissors").should("contain", "Scissors")
      });
  
    it("User choose Rock", () => {
      cy.get("button#rock").should("contain", "Rock")
    });
  
    it("User can see computers choice", () => {
      cy.get("computer-play").should("contain", "Computer choise")
    });
  
    it("User can see the results", () => {
      cy.get("#results").should("contain", "You win!")
    });
  });