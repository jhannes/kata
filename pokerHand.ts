const RANK_ORDER = ["Ace", "King", "Queen", "Jack", "10"];
const RANKS: Record<string, string> = {
  K: "King",
  Q: "Queen",
  "10": "10",
};

function toCard(cardString: string) {
  return RANKS[cardString.substring(0, cardString.length - 1)];
}

export function pokerHand(hand: string) {
  const cards = hand.split(" ").map(toCard);

  const frequencies = Object.fromEntries(RANK_ORDER.map((r) => [r, 0]));
  for (const card of cards) {
    frequencies[card]++;
  }

  for (const card in frequencies) {
    if (frequencies[card] === 2) {
      return `Pair (${card})`;
    }
  }

  const highestCard = cards.sort(
    (a, b) => RANK_ORDER.indexOf(a) - RANK_ORDER.indexOf(b),
  )[0];
  return "High card (" + highestCard + ")";
}
