describe("Register Fixed User", () => {
  const baseUrl = "https://robot-lab-five.vercel.app";
  const firstName = "Test";
  const lastName = "User";
  const email = "fixeduser@example.com";     // ใช้ email คงที่
  const password = "password1234";           // ใช้ password คงที่

  it("should register the user (if not exists)", () => {
    cy.visit(baseUrl);

    // เปิดหน้า register
    cy.get(".nav-btn-register").click();

    // รอ form ปรากฏ
    cy.get("#email", { timeout: 10000 }).should("be.visible");

    // กรอกข้อมูล Register
    cy.get("#firstName").clear().type(firstName);
    cy.get("#lastName").clear().type(lastName);
    cy.get("#email").clear().type(email);
    cy.get("#password").clear().type(password);

    // กดปุ่ม Register
    cy.get("button[type='submit']").click({ force: true });

    // ตรวจสอบข้อความ Register successful หรือ User already exists
    cy.get(".message", { timeout: 10000 })
      .then($el => {
        const msg = $el.text();
        cy.log("Register message:", msg);
        // บันทึก screenshot แยกตามผลลัพธ์
        if (msg.includes("Register successful")) {
          cy.screenshot("register-success");
        } else if (msg.includes("User already exists")) {
          cy.screenshot("register-exists");
        }
      });
  });
});
