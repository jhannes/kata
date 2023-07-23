
const RANK_ORDER = [
    "Ace", "King", "Queen", "Jack", "10"
]

const RANKS: Record<string, string> = {
    'K': "King",
    'Q': "Queen",
    '10': "10",
}

function toCard(cardString: string) {
    return RANKS[cardString.substring(0, cardString.length-1)];
}


function pokerHand(hand: string) {
    const cards = hand.split(" ").map(toCard);

    const frequencies = Object.fromEntries(RANK_ORDER.map(r => [r, 0]));
    for (const card of cards) {
        frequencies[card]++;
    }

    for (const card in frequencies) {
        if (frequencies[card] === 2) {
            return `Pair (${card})`
        }
    }

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
    itIdentifies("High card (10)", "2c 4d 10c 5h 7d");
    itIdentifies("Pair (10)", "2c 4d 10c 10h Qd");
})