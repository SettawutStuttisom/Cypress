describe("Login Success Test", () => {
  const baseUrl = "https://robot-lab-five.vercel.app";
  const email = "fixeduser@example.com";
  const password = "password1234";

  it("should login successfully and capture full page screenshot", () => {
    cy.visit(baseUrl);

    cy.get(".nav-btn-login").click();
    cy.get("#loginEmail").clear().type(email);
    cy.get("#loginPassword").clear().type(password);
    cy.get("form > button").click({ force: true });

    // ตรวจสอบข้อความ Login successful
    cy.get(".message", { timeout: 10000 })
      .should("contain.text", "Login successful");

    // แคปเต็มหน้าเว็บทีเดียว
    cy.screenshot("login-success-fullpage", { capture: "fullPage" });
  });
});
