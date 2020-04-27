describe("user can remove contact after it has been saved", () => {
  it("test if the contact can be removed", () => {
    cy.visit("http://localhost:3005");
    cy.get("#remove-contact").click();
  });
});
