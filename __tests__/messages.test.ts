import { showMessage, english, norwegian } from "../messages";


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

  it("shows message with a single array element", () => {
    expect(
      showMessage(english, {
        code: "invalidEmailDomain",
        emailInput: "f@a.com",
        validDomains: ["example.com"],
      })
    ).toBe("The email address f@a.com must have domain example.com");
  });
});
