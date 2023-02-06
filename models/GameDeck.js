import { Deck } from "./Deck.js";
import { Card } from "./Card.js"


const actions = ['unshift', 'push'];

export class GameDeck extends Deck {
    constructor() {
        super();
    }

    createCard(type, value, calor) {
        let card = new Card(type, value, calor);
        this.deck.push(card);
    }

    shuffle() {
        for (let i = 0; i < this.deck.length * 3; i++) {
            const index = Math.floor(Math.random() * this.deck.length - 1)
            const card = this.deck.splice(index, 1).pop();
            console.log(card)
            if (actions[Math.floor(Math.random() * 2)] == 'unshift') {
                console.log('unshift');
                this.deck.unshift(card);
            } else {
                console.log('push');
                this.deck.push(card);
            }
        }

        console.log(this.deck);
    }
}