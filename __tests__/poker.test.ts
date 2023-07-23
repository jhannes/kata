
const RANK_ORDER = [
    "Ace", "King", "Queen", "Jack"
]

const RANKS: Record<string, string> = {
    'K': "King",
    'Q': "Queen",
    '10': "10",
}


function pokerHand(hand: string) {
    const cards = hand.split(" ").map(c => RANKS[c.substring(0, 1)]);
    const highestCard = cards.sort((a, b) => RANK_ORDER.indexOf(a) - RANK_ORDER.indexOf(b))[0];
    return "High card (" + highestCard + ")"
}

function itIdentifies(expected: string, hand: string) {
    it("identifies " +expected, () => {
        expect(pokerHand(hand)).toEqual(expected);
    })
}

describe("poker hand", () => {
    itIdentifies("High card (King)", "Kc Qd 10c 5h 7d");
    itIdentifies("High card (Queen)", "2c Qd 10c 5h 7d");
})