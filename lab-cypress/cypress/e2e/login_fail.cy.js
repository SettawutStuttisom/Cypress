describe("Login Fail Test", () => {
  const baseUrl = "https://robot-lab-five.vercel.app";
  const email = "testuser@example.com";      // ใช้ email เดียวกับ login success
  const wrongPassword = "wrongpassword";     // ใส่ password ผิด

  it("should fail login with wrong password", () => {
    cy.visit(baseUrl);
    cy.get(".nav-btn-login").click();

    cy.get("#loginEmail").clear().type(email);
    cy.get("#loginPassword").clear().type(wrongPassword);
    cy.get("form > button").click({ force: true });

    // ตรวจสอบข้อความเมื่อ login ไม่สำเร็จ
    cy.get(".message", { timeout: 10000 })
      .should("contain.text", "Invalid email or password")
      .screenshot("login-fail");
  });
});
