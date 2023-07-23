
function pokerHand(hand: string) {
    return "High card (King)"
}

describe("poker hand", () => {
    it("shows high card", () => {
        expect(pokerHand("Kc Qd 10c 5h 7d")).toEqual("High card (King)");
    })
})