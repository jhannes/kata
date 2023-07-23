
function pokerHand(hand: string) {}

describe("poker hand", () => {
    it("shows high card", () => {
        expect(pokerHand("Kc Qd 10c 5h 7d")).toEqual("High card (King)");
    })
})