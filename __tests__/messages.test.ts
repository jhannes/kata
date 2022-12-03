type Message =
  | {
      code: "generalError";
    }
  | {
      code: "invalidWeekday";
      weekday: string;
    }
    | {
        code: "invalidEmailDomain",
        emailInput: string,
        validDomains: string[]
    };

interface Language {
  generalError: string;
  invalidWeekday(weekday: string): string;
}

const english: Language = {
  generalError: "An error has occurred",
  invalidWeekday: (weekday) => `"${weekday}" is not a valid weekday`,
};
const norwegian: Language = {
  generalError: "En feil har inntruffet",
  invalidWeekday: (weekday) => `"${weekday}" is not a valid weekday`,
};

function showMessage(language: Language, message: Message) {
  if (message.code === "invalidWeekday") {
    return language.invalidWeekday(message.weekday);
  } else if (message.code === "invalidEmailDomain") {
    return "";
  }
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

  it("shows a message with array argument", () => {
    expect(
      showMessage(english, {
        code: "invalidEmailDomain",
        emailInput: "test@example.net",
        validDomains: ["example.com", "example.org"],
      })
    ).toBe(
      "The email address test@example.net must have domain example.com or example.org"
    );
  });
});
