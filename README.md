## Kata: Poker (Texas Hold 'em)

This kata is inspired by [Ruby Quiz 24](http://rubyquiz.com/quiz24.html) via [Coding Dojo](https://codingdojo.org/kata/TexasHoldEm/). See also the description of [Poker Hands on Coding Dojo](https://codingdojo.org/kata/PokerHands/)

The goal of the kata is to determine which poker hand in Texas Hold 'em is winning. Each player should have their hand calculated from the best combination of the five community cards and their personal two cards. The order of hands in poker:

1. High card
2. Pair
3. Two pairs
4. Three of a kind
5. Straight
6. Flush
7. Full house
8. Four of a kind
9. Straight flush
10. Royal flush

## Hints

### Getting started with a new project

1. `npm init`
2. `npm install --save-dev typescript jest ts-jest @types/jest prettier`
3. `npx tsc --init`
4. `npx ts-jest config:init`
5. `npm pkg set scripts.test=jest`
6. `npm pkg set scripts.test:watch="jest --watchAll"`
7. Create `__tests__/poker.test.ts` with `describe("poker hand", () => { it("shows high card", () => {})})`
8. `npm run test:watch`

### Example assertion:

```typescript
expect(pokerHand("Kc Qd 10c 5h 7d")).toEqual("High card (King)");
```

### Tips: Test order

1. Identify high card
2. Identify pair -> Royal flush
3. Determine the best of two hands
4. Determine the best five of seven cards

### Continuations

This is a fairly open-ended task. When you have solved the rules for the final hands, you may want to determine the likely strength of an incomplete deal after the flop, the river and the turn. You may also want to create a UI to display the cards and let the user bet.

## Trivia

The term "totally Texas" in Norwegian colloquial speech means "crazy".

