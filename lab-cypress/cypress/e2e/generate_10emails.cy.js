describe("Generate fixture with 10 emails", () => {
  it("reads intercepted_post_data.json and writes intercepted_post_data_10emails.json with 10 emails", () => {
    const emailPrefix = "auto_test";
    const domain = "example.com";
    const password = "password1234";

    cy.fixture("intercepted_post_data.json").then((apiData) => {
      if (!apiData || apiData.length === 0) {
        throw new Error("intercepted_post_data.json is empty or not found");
      }

      const template = apiData[0]; 
      const newArray = [];

      for (let i = 1; i <= 10; i++) {
        const clone = JSON.parse(JSON.stringify(template));
        if (clone.requestBody) {
          clone.requestBody.email = `${emailPrefix}${i}@${domain}`;
          clone.requestBody.password = password;
        }
        newArray.push(clone);
      }

      cy.writeFile("cypress/fixtures/intercepted_post_data_10emails.json", newArray, { log: true });
      cy.log("Wrote intercepted_post_data_10emails.json with 10 entries");
    });
  });
});
