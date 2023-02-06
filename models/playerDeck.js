import { Deck } from "./Deck.js";

export class PlayerDeck extends Deck {
    constructor() {
        super();
    }

    addFieldCards(fieldCards) {
        this.deck.splice(0, 0, ...fieldCards);
    }
}