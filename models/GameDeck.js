import { Deck } from "./Deck.js";


const actions = ['unshift', 'push'];

export class GameDeck extends Deck {
    constructor() {
        super();
    }

    shuffle() {
        for (let i = 0; i < this.deck.length * 3; i++) {
            const index = Math.floor(Math.random() * 51)
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