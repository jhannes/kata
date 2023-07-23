import {PokerHand} from "../pokerHand";
const _jestMatcherUtils = require('jest-matcher-utils');

function itIdentifies(expected: string, hand: string) {
  it("identifies " + expected, () => {
    const actual = new PokerHand(hand);
    if (actual.description() !== expected) {
      const diff = _jestMatcherUtils.printDiffOrStringify(expected, actual.description(), "Expected", "Received", true);
      throw new Error(`Poker hand: ${_jestMatcherUtils.printExpected(actual)}\n\n${diff}\n`)
    }
  });
}

describe("poker hand", () => {
  itIdentifies("High card (King)", "Kc Qd 10c 5h 7d");
  itIdentifies("High card (Queen)", "2c Qd 10c 5h 7d");
  itIdentifies("High card (10)", "2c 4d 10c 5h 7d");
  itIdentifies("Pair (10)", "2c 4d 10c 10h Qd");
  itIdentifies("Two pairs (10 and 4)", "2c 4d 10c 10h 4d");
  itIdentifies("Three of a kind (10)", "10c 4d 10h 10h Qd");
  itIdentifies("Straight (10 high)", "10c 9d 8c 6h 7d");
  itIdentifies("Flush", "10h 4h 9h 3h Qh");
  itIdentifies("House of 10s and Jacks", "10h 10c Jh 10d Jh");
  itIdentifies("Four of a kind (10)", "10h 10c Jh 10d 10s");
  itIdentifies("Straight flush", "10h 9h 7h Jh 8h");
});
