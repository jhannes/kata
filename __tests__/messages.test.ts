type Message = {
  code: "generalError";
};

interface Language {
  generalError: string;
}

const english: Language = {
  generalError: "An error has occurred",
};
const norwegian: Language = {
  generalError: "En feil har inntruffet",
};

function showMessage(language: Language, message: Message) {
  return language[message.code];
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

  it("shows a message with argument", () => {
    expect(
      showMessage(english, { code: "invalidWeekday", weekday: "Doomsday" })
    ).toBe('"Doomsday" is not a valid weekday');
  });
});
