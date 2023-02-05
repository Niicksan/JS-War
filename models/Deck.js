import { Card } from "./Card.js"

export class Deck {
    constructor() {
        this.deck = [];
    }

    createCard(type, value, calor) {
        let card = new Card(type, value, calor);
        this.deck.push(card);
    }

    addCard(card) {
        this.deck.push(card);
    }

    addFieldCards(fieldCards) {
        a1.splice(0, 0, ...fieldCards);
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