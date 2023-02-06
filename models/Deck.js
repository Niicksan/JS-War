export class Deck {
    constructor() {
        this.deck = [];
    }

    addCard(card) {
        this.deck.push(card);
    }

    drawCard() {
        return this.deck.pop();
    }

    get showCards() {
        return this.deck;
    }

    get numberOfCards() {
        return this.deck.length;
    }
}