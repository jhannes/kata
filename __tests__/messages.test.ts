const english = {};
const norwegian = {};

type Message = {
  code: "generalError";
};

function showMessage(language: object, message: Message) {
  return "An error has occurred";
}

describe("translations", () => {
  it("shows a message in english", () => {
    expect(showMessage(english, { code: "generalError" })).toBe(
      "An error has occurred"
    );
  });

  it("shows a message in norwegian", () => {
    expect(showMessage(norwegian, { code: "generalError" })).toBe(
      "En feil har inntruffet"
    );
  });
});
