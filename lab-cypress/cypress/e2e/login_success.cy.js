describe("Login Success Test", () => {
  const baseUrl = "https://robot-lab-five.vercel.app";
  const email = "fixeduser@example.com";      // ใช้ email จริงที่มีอยู่แล้ว
  const password = "password1234";           // ใช้ password จริงที่ถูกต้อง

  it("should login successfully", () => {
    cy.visit(baseUrl);
    cy.get(".nav-btn-login").click();

    // กรอกข้อมูล login
    cy.get("#loginEmail").clear().type(email);
    cy.get("#loginPassword").clear().type(password);
    cy.get("form > button").click({ force: true });

    // ตรวจสอบข้อความ Login successful
    cy.get(".message", { timeout: 10000 })
      .should("contain.text", "Login successful")
      .screenshot("login-success");
  });
});
