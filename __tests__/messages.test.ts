const english = {};

function showMessage(language, message) {
    
}


describe("translations", () => {
  it("shows a message in english", () => {
    expect(showMessage(english, { code: "generalError" })).toBe("An error has occurred");
  });
});
