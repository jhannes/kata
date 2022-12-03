type Message =
  | {
      code: "generalError";
    }
  | {
      code: "invalidWeekday";
      weekday: string;
    }
  | {
      code: "invalidEmailDomain";
      emailInput: string;
      validDomains: string[];
    };

function joinWithComma(args: string[], lastConjunction: string) {
  return args.join(` ${lastConjunction} `);
}

interface MessageTexts {
  generalError: string;
  invalidEmailDomain(args: {
    emailInput: string;
    validDomains: string[];
  }): string;
  invalidWeekday(args: { weekday: string }): string;
  joinWithOr(args: string[]): string;
}

const english: MessageTexts = {
  generalError: "An error has occurred",
  invalidEmailDomain: ({ emailInput, validDomains }) =>
    `The email address ${emailInput} must have domain ${english.joinWithOr(
      validDomains
    )}`,
  invalidWeekday: ({ weekday }) => `"${weekday}" is not a valid weekday`,
  joinWithOr: (args) => joinWithComma(args, "or"),
};
const norwegian: MessageTexts = {
  generalError: "En feil har inntruffet",
  invalidEmailDomain: ({ emailInput, validDomains }) =>
    `Emailadressen ${emailInput} må være i domene ${norwegian.joinWithOr(
      validDomains
    )}`,
  invalidWeekday: ({ weekday }) => `"${weekday}" is not a valid weekday`,
  joinWithOr: (args) => joinWithComma(args, "eller"),
};

function showMessage(language: MessageTexts, message: Message) {
  if (message.code === "invalidWeekday") {
    return language.invalidWeekday(message);
  } else if (message.code === "invalidEmailDomain") {
    return language.invalidEmailDomain(message);
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

  it("shows comma between array arguments", () => {
    expect(
      showMessage(norwegian, {
        code: "invalidEmailDomain",
        emailInput: "test@example.net",
        validDomains: [
          "foo.example.com",
          "bar.example.com",
          "quz.example.com",
          "quux.example.com",
        ],
      })
    ).toBe(
      "Emailadressen test@example.net må være i domene foo.example.com, bar.example.com, quz.example.com eller quux.example.com"
    );
  });
});
