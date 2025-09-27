describe("API Playback - send captured requests multiple times", () => {
  it("sends all requests from intercepted_post_data.json 10 times", () => {
    cy.fixture("intercepted_post_data.json").then((apiData) => {
      if (apiData.length === 0) {
        cy.log("No API requests captured.");
        return;
      }

      apiData.forEach((reqData) => {
        for (let i = 0; i < 10; i++) {
          cy.request({
            method: reqData.method,
            url: reqData.url,
            body: reqData.requestBody,
            failOnStatusCode: false, // ไม่ fail ถ้า 401/400
          }).then((res) => {
            cy.log(`Request to ${reqData.url} #${i + 1} status: ${res.status}`);
            cy.log(`Response: ${JSON.stringify(res.body)}`);
          });
        }
      });
    });
  });
});
