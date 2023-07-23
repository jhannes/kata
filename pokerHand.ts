const RANK_ORDER = ["Ace", "King", "Queen", "Jack", "10", "9", "8", "7", "6", "5", "4", "2"];
const RANKS: Record<string, string> = {
  K: "King",
  Q: "Queen",
};

function toCard(cardString: string) {
  let rankString = cardString.substring(0, cardString.length - 1);
  return RANKS[rankString] || rankString;
}

export function pokerHand(hand: string) {
  const cards = hand.split(" ").map(toCard);

  const frequencies = Object.fromEntries(RANK_ORDER.map((r) => [r, 0]));
  for (const card of cards) {
    frequencies[card]++;
  }

  let highCardIndex = RANK_ORDER.findIndex(r => frequencies[r] === 1);
  let foundStraight = true;
  for (let i = 0; i < 5; i++) {
    if (frequencies[RANK_ORDER[highCardIndex+i]] !== 1) {
      foundStraight = false;
      break;
    }
  }
  if (foundStraight) {
    return `Straight (${RANK_ORDER[highCardIndex]} high)`
  }

  let firstPair = undefined, secondPair = undefined;
  for (const card of RANK_ORDER) {
    if (frequencies[card] === 3) {
      return `Three of a kind (${card})`
    }
    if (frequencies[card] === 2 && !firstPair) {
      firstPair = card;
    } else if (frequencies[card] === 2 && !secondPair) {
      secondPair = card;
    }
  }

  if (secondPair) {
    return `Two pairs (${firstPair} and ${secondPair})`
  } else if (firstPair) {
    return `Pair (${firstPair})`
  }

  const highestCard = cards.sort(
    (a, b) => RANK_ORDER.indexOf(a) - RANK_ORDER.indexOf(b),
  )[0];
  return "High card (" + highestCard + ")";
}
