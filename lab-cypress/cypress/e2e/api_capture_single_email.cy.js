describe("API Capture - intercept POST /api/** and save to JSON (single email)", () => {
  it("captures POST request and writes to cypress/fixtures/intercepted_post_data.json", () => {
    const intercepted = [];

    // ดักทุก POST ที่มี /api/
    cy.intercept("POST", "**/api/**", (req) => {
      req.continue((res) => {
        intercepted.push({
          url: req.url,
          method: req.method,
          requestBody: req.body,
          responseBody: res.body,
          statusCode: res.statusCode,
        });
      });
    }).as("postApi");

    cy.visit("https://robot-lab-five.vercel.app/");

    // ทำ action login fail เพื่อให้เกิด POST API
    const email = "wrong@gmail.com"; // ใช้ email เดียว
    const password = "wrongpass";

    cy.get(".nav-btn-login").click();
    cy.get("#loginEmail").clear().type(email);
    cy.get("#loginPassword").clear().type(password);
    cy.get("form > button").click({ force: true });

    // รอ POST request อย่างน้อยหนึ่งครั้ง
    cy.wait("@postApi", { timeout: 15000 });

    // บันทึกไฟล์ JSON
    cy.then(() => {
      cy.writeFile("cypress/fixtures/intercepted_post_data.json", intercepted, { log: true });
    });

    // ถ่าย screenshot หน้าเว็บหลังเรียก API
    cy.screenshot("after-api-capture-single-email");
  });
});
