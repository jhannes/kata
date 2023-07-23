import {pokerHand} from "../pokerHand";

function itIdentifies(expected: string, hand: string) {
  it("identifies " + expected, () => {
    expect(pokerHand(hand)).toEqual(expected);
  });
}

describe("poker hand", () => {
  itIdentifies("High card (King)", "Kc Qd 10c 5h 7d");
  itIdentifies("High card (Queen)", "2c Qd 10c 5h 7d");
  itIdentifies("High card (10)", "2c 4d 10c 5h 7d");
  itIdentifies("Pair (10)", "2c 4d 10c 10h Qd");
  itIdentifies("Two pairs (10 and 4)", "2c 4d 10c 10h 4d");
});
