describe("Playback requests for 10 emails", () => {
  it("reads intercepted_post_data_10emails.json and sends each request 10 times", () => {
    const roundsPerEmail = 10; 
    const results = [];

    cy.fixture("intercepted_post_data_10emails.json").then((list) => {
      if (!list || list.length === 0) {
        cy.log("No entries in intercepted_post_data_10emails.json");
        return;
      }

      list.forEach((entry, idx) => {
        for (let r = 0; r < roundsPerEmail; r++) {
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

      cy.then(() => {
        cy.writeFile("cypress/results/playback_10emails_results.json", results, { log: true });
      });
    });
  });
});
