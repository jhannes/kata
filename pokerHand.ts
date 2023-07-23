type Rank = string;
const RANK_ORDER = [
  "Ace",
  "King",
  "Queen",
  "Jack",
  "10",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "2",
];
const RANKS: Record<string, string> = {
  K: "King",
  Q: "Queen",
};

function toCard(cardString: string) {
  let rankString = cardString.substring(0, cardString.length - 1);
  return RANKS[rankString] || rankString;
}

export class PokerHand {
  cards: Rank[];
  frequencies: Record<Rank, number>;
  constructor(private hand: string) {
    this.cards = hand.split(" ").map(toCard);
    this.frequencies = Object.fromEntries(RANK_ORDER.map((r) => [r, 0]));
    for (const card of this.cards) {
      this.frequencies[card]++;
    }
  }

  description() {
    let highCardIndex = RANK_ORDER.findIndex((r) => this.frequencies[r] === 1);
    let foundStraight = true;
    for (let i = 0; i < 5; i++) {
      if (this.frequencies[RANK_ORDER[highCardIndex + i]] !== 1) {
        foundStraight = false;
        break;
      }
    }
    if (foundStraight) {
      return `Straight (${RANK_ORDER[highCardIndex]} high)`;
    }

    let firstPair = undefined,
      secondPair = undefined;
    for (const card of RANK_ORDER) {
      if (this.frequencies[card] === 3) {
        return `Three of a kind (${card})`;
      }
      if (this.frequencies[card] === 2 && !firstPair) {
        firstPair = card;
      } else if (this.frequencies[card] === 2 && !secondPair) {
        secondPair = card;
      }
    }

    if (secondPair) {
      return `Two pairs (${firstPair} and ${secondPair})`;
    } else if (firstPair) {
      return `Pair (${firstPair})`;
    }

    const highestCard = this.cards.sort(
      (a, b) => RANK_ORDER.indexOf(a) - RANK_ORDER.indexOf(b),
    )[0];
    return "High card (" + highestCard + ")";
  }
}

export function pokerHand(hand: string) {
  return new PokerHand(hand).description();
}
