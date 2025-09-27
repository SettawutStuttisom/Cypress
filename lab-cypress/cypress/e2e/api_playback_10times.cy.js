// cypress/e2e/playback_10emails.cy.js
describe("Playback requests for 10 emails", () => {
  it("reads intercepted_post_data_10emails.json and sends each request (optionally multiple times)", () => {
    const roundsPerEmail = 1; // เปลี่ยนเป็น 10 ถ้าต้องการยิง 10 รอบต่อ email
    const results = [];

    cy.fixture("intercepted_post_data_10emails.json").then((list) => {
      if (!list || list.length === 0) {
        cy.log("No entries in intercepted_post_data_10emails.json");
        return;
      }

      // forEach entry (แต่ละ entry มี url/method/requestBody)
      list.forEach((entry, idx) => {
        for (let r = 0; r < roundsPerEmail; r++) {
          // ใช้ cy.request เพื่อยิง API; ตั้ง failOnStatusCode:false เพื่อไม่ให้ test หยุดเมื่อเกิด error
          cy.request({
            method: entry.method,
            url: entry.url,
            body: entry.requestBody,
            failOnStatusCode: false,
          }).then((res) => {
            const rec = {
              index: idx,
              round: r + 1,
              url: entry.url,
              status: res.status,
              responseBody: res.body,
            };
            results.push(rec);
            cy.log(`Entry ${idx + 1} Round ${r + 1} -> ${res.status}`);
          });
        }
      });

      // หลังจาก loop ทั้งหมด ให้บันทึกผลเป็นไฟล์เพื่อวิเคราะห์
      cy.then(() => {
        cy.writeFile("cypress/results/playback_10emails_results.json", results, { log: true });
      });
    });
  });
});
