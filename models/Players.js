import { Player } from "./Player.js";

export class Players {
    constructor() {
        this.players = [];
    }

    addPlayer(name) {
        let player = new Player(name);
        this.players.push(player);
    }

    get allPlayers() {
        return this.players;
    }

    get numberOfPlayers() {
        return this.players.length;
    }
}