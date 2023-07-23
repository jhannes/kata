
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

describe("poker hand", () => {
    it("identifies high card (King)", () => {
        expect(pokerHand("Kc Qd 10c 5h 7d")).toEqual("High card (King)");
    })
    it("identifies high card (Queen)", () => {
        expect(pokerHand("2c Qd 10c 5h 7d")).toEqual("High card (Queen)");
    })
})