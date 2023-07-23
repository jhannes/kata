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
type Rank = typeof RANK_ORDER[number];
const RANKS: Record<string, string> = {
  K: "King",
  Q: "Queen",
  J: "Jack",
};

type Suit = "Hearts" | "Diamonds" | "Clubs" | "Spades";

type Card = {
  rank: Rank;
  rankOrder: number;
  suit: Suit;
};

function toSuit(cardString: string): Suit {
  switch (cardString.substring(cardString.length - 1)) {
    case "c":
      return "Clubs";
    case "d":
      return "Diamonds";
    case "h":
      return "Hearts";
    case "s":
      return "Spades";
    default:
      throw new Error(`Illegal suit for ${cardString}`);
  }
}

function toCard(cardString: string) {
  const rankString = cardString.substring(0, cardString.length - 1);
  const rank = RANKS[rankString] || rankString;
  const rankOrder = RANK_ORDER.indexOf(rank);
  return { rank, rankOrder, suit: toSuit(cardString) };
}

export class PokerHand {
  cards: Card[];
  frequencies: Record<Rank, number>;
  constructor(private hand: string) {
    this.cards = hand.split(" ").map(toCard);
    this.frequencies = Object.fromEntries(RANK_ORDER.map((r) => [r, 0]));
    for (const card of this.cards) {
      this.frequencies[card.rank]++;
    }
  }

  description() {
    const flush = this.checkFlush();
    const straight = this.checkStraight();

    if (flush && straight) return "Straight flush";

    const fourOfKind = this.findOfFrequency(4);
    if (fourOfKind) return `Four of a kind (${fourOfKind})`;

    const threeOfKind = this.findOfFrequency(3);
    const pair = this.findOfFrequency(2);

    if (threeOfKind && pair) return `House of ${threeOfKind}s and ${pair}s`;

    if (flush) return "Flush";

    if (straight) return `Straight (${straight} high)`;

    if (threeOfKind) return `Three of a kind (${threeOfKind})`;

    const twoPairs = this.checkTwoPairs();
    if (twoPairs) return twoPairs;

    if (pair) return `Pair (${pair})`;

    const highestCard = this.cards.sort(
      (a, b) => a.rankOrder - b.rankOrder,
    )[0];
    return "High card (" + highestCard.rank + ")";
  }

  private checkFlush(): Suit|undefined {
    for (const card of this.cards) {
      if (card.suit !== this.cards[0].suit) {
        return;
      }
    }
    return this.cards[0].suit;
  }

  private checkStraight(): Rank|undefined {
    const highCardIndex = RANK_ORDER.findIndex((r) => this.frequencies[r] === 1);
    for (let i = 0; i < 5; i++) {
      if (this.frequencies[RANK_ORDER[highCardIndex + i]] !== 1) {
        return;
      }
    }
    return RANK_ORDER[highCardIndex];
  }

  private checkTwoPairs() {
    let firstPair = undefined,
        secondPair = undefined;
    for (const card of RANK_ORDER) {
      if (this.frequencies[card] === 2 && !firstPair) {
        firstPair = card;
      } else if (this.frequencies[card] === 2 && !secondPair) {
        secondPair = card;
      }
    }

    if (secondPair) {
      return `Two pairs (${firstPair} and ${secondPair})`;
    }
  }

  private findOfFrequency(frequency: number) {
    for (const rank of RANK_ORDER) {
      if (this.frequencies[rank] === frequency) {
        return rank;
      }
    }
  }
}
