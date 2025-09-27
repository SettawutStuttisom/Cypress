describe("API Capture - intercept POST /api/** and save to fixture", () => {
  it("captures POST api requests and writes to cypress/fixtures/intercepted_post_data.json", () => {
    const intercepted = [];

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

    // ทำ action login fail เพื่อเกิด POST API
    cy.get(".nav-btn-login").click();
    cy.get("#loginEmail").type("wrong@gmail.com");
    cy.get("#loginPassword").type("wrongpass");
    cy.get("form > button").click({ force: true });

    // รอการเรียก POST อย่างน้อยหนึ่งครั้ง
    cy.wait("@postApi", { timeout: 15000 });

    // เขียน JSON ลง fixtures
    cy.then(() => {
      cy.writeFile("cypress/fixtures/intercepted_post_data.json", intercepted, { log: true });
    });

    // ถ่าย screenshot หน้าเว็บหลังเรียก API
    cy.screenshot("after-api-capture");
  });
});
