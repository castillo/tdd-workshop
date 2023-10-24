import { symbols } from "./symbols";
import { shuffle } from "./shuffle";

export class Card {
}

export class FrenchCard extends Card {
    suit: string;
    number: number;
    constructor(suit: string, number: number) {
        super();
        this.suit = suit;
        this.number = number;
    }
}
export class Deck {
    cards: Card[] = [];
    constructor(cards: Card[] = []) {
        this.cards = cards;
    }
    shuffle() {
        this.cards = shuffle(this.cards);
    }
    draw(): Card {
        return this.cards.pop();

    }
}

export class FrenchDeck extends Deck {
    static readonly suits =["clubs", "diamonds", "hearts", "spades"];
    constructor(cards: Card[] = []) {
        if(cards.length == 0) {
            cards = FrenchDeck.getFullDeck();
        }
        super(cards);
    }

    static getFullDeck(): FrenchCard[] {
        const cards: FrenchCard[] = []
        FrenchDeck.suits.map((suit) => {
            for (let i = 1; i < 14; i++) {
                cards.push(new FrenchCard(suit, i));
            }
        });
        return cards;
    }
}