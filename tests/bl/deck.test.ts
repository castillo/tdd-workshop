import { FrenchDeck, FrenchCard, Deck, Card } from "../../app/bl/deck";

describe("Deck", () => {
    it("must have a cards array", () => {
        const deck = new Deck();
        expect(deck.cards).toBeDefined();
        expect(Array.isArray(deck.cards)).toBe(true);
    });
    it("must shuffle properly", () => {
        const deck = new Deck([new FrenchCard("clubs", 1), new FrenchCard("hearts", 1)]);
        jest.doMock("../../app/bl/shuffle", () => ({
            shuffle: jest.fn()
        }));
        const mocked = require("../../app/bl/shuffle");
        expect(deck.shuffle).toBeDefined();
        deck.shuffle();
    });
    it("must be able to accept a list of cards in initialization", () => {
        const deck = new Deck([new FrenchCard("clubs", 1), new FrenchCard("hearts", 1)]);
        expect(deck.cards.length).toBe(2);
    });
    it("must be able to draw a card if there are cards", () => {
        const deck = new Deck([new FrenchCard("clubs", 1), new FrenchCard("hearts", 1)]);
        const card = deck.draw();
        expect(card).toEqual(new FrenchCard("hearts", 1))
        expect(deck.cards.length).toBe(1);
    });
    it("must not be able to draw a card if there are no cards", () => {
        const deck = new Deck();
        const card = deck.draw();
        expect(card).toBeUndefined();
    })
});

describe("FrenchCard", () => {
    it("must have a suit", () => {
        const card = new FrenchCard("clubs", 1);
        expect(card.suit).toBe("clubs");
    });
    it("must have a number", () => {
        const card = new FrenchCard("clubs", 1);
        expect(card.number).toBe(1);
    });
});

describe("FrenchDeck", () => {
    it("must have 52 cards", () => {
        const deck = new FrenchDeck();
        expect(deck.cards.length).toBe(52);
    });
    it("can be initialized with a different set of french cards", () => {
        const cards = [new FrenchCard("clubs", 1), new FrenchCard("hearts", 1)];
        const deck = new FrenchDeck(cards);
        expect(deck.cards.length).toBe(2);
    });
})