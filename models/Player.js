import { PlayerDeck } from "./playerDeck.js";

export class Player {
    constructor(name) {
        this.name = name;
        this.playerDeck = new PlayerDeck();
    }
}