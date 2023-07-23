
function pokerHand(hand: string) {
    return "High card (King)"
}

describe("poker hand", () => {
    it("identifies high card (King)", () => {
        expect(pokerHand("Kc Qd 10c 5h 7d")).toEqual("High card (King)");
    })
    it("identifies high card (Queen)", () => {
        expect(pokerHand("2c Qd 10c 5h 7d")).toEqual("High card (Queen)");
    })
})