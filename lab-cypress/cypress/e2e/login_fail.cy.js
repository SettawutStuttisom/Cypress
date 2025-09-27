describe("Login Fail Test", () => {
  const baseUrl = "https://robot-lab-five.vercel.app";
  const email = "wrong@gmail.com"; 
  const password = "wrongpass";    

  it("should fail to login and capture full page screenshot", () => {
    cy.visit(baseUrl);

    cy.get(".nav-btn-login").click();
    cy.get("#loginEmail").clear().type(email);
    cy.get("#loginPassword").clear().type(password);
    cy.get("form > button").click({ force: true });

    cy.get(".message", { timeout: 10000 })
      .should("contain.text", "Invalid email or password");

    cy.screenshot("login-fail-fullpage", { capture: "fullPage" });
  });
});
