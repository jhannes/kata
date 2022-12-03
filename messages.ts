import { format } from "date-fns";
import { nb } from "date-fns/locale";
interface MessageTexts {
  tooLateDueDate(args: { dueDateLimit: Date }): unknown;
  generalError: string;
  invalidEmailDomain(args: {
    emailInput: string;
    validDomains: string[];
  }): string;
  invalidWeekday(args: { weekday: string }): string;
  joinWithOr(args: string[]): string;
}

export function showMessage(language: MessageTexts, message: Message) {
  if (message.code === "invalidWeekday") {
    return language.invalidWeekday(message);
  } else if (message.code === "tooLateDueDate") {
    return language.tooLateDueDate(message);
  } else if (message.code === "invalidEmailDomain") {
    return language.invalidEmailDomain(message);
  }
  return language[message.code];
}

export const english: MessageTexts = {
  generalError: "An error has occurred",
  invalidEmailDomain: ({ emailInput, validDomains }) =>
    `The email address ${emailInput} must have domain ${english.joinWithOr(
      validDomains
    )}`,
  invalidWeekday: ({ weekday }) => `"${weekday}" is not a valid weekday`,
  tooLateDueDate: ({ dueDateLimit }) =>
    `Due date must be before ${format(dueDateLimit, "PPP")}`,
  joinWithOr: (args) => joinWithComma(args, "or"),
};

export const norwegian: MessageTexts = {
  generalError: "En feil har inntruffet",
  invalidEmailDomain: ({ emailInput, validDomains }) =>
    `Emailadressen ${emailInput} må være i domene ${norwegian.joinWithOr(
      validDomains
    )}`,
  invalidWeekday: ({ weekday }) => `"${weekday}" is not a valid weekday`,
  tooLateDueDate: ({ dueDateLimit }) =>
    `Forfallsdato må settes til før ${format(dueDateLimit, "PPP", {
      locale: nb,
    })}`,
  joinWithOr: (args) => joinWithComma(args, "eller"),
};

type Message =
  | {
      code: "generalError";
    }
  | {
      code: "invalidWeekday";
      weekday: string;
    }
  | {
      code: "tooLateDueDate";
      dueDateLimit: Date;
    }
  | {
      code: "invalidEmailDomain";
      emailInput: string;
      validDomains: string[];
    };

function joinWithComma(args: string[], lastConjunction: string) {
  if (args.length === 1) {
    return args[0];
  }
  const input = [...args];
  const last = input.pop();
  return `${input.join(", ")} ${lastConjunction} ${last}`;
}
