import { cards } from "./enums/cards.js";
import { extraCards } from "./enums/extraCards.js";
import { suitsCards } from "./enums/suites.js";
import { GameDeck } from "./models/GameDeck.js";
import { Players } from "./models/Players.js";


// window.addEventListener("load", startGame);
const players = new Players();
const gameDeck = new GameDeck();
const colors = ['red', 'black'];
const actions = ['unshift', 'push'];

function createPlayers(playersNumber) {
    if (playersNumber > 1) {
        for (let i = 1; i <= playersNumber; i++) {
            players.addPlayer(`Player ${i}`);
        }
    } else {
        console.log('Not enough players');
    }

    console.log(players.allPlayers);
}

function createGameDeck(jokers) {
    for (const [key, suitsValue] of Object.entries(suitsCards)) {
        for (const [key, cardsValue] of Object.entries(cards)) {
            gameDeck.createCard(suitsValue.sign, cardsValue, suitsValue.color);
        }
    }

    if (jokers != undefined) {
        if (jokers != 0 && jokers < 5) {
            for (let i = 0; i < jokers; i++) {
                gameDeck.createCard(
                    Object.keys(extraCards).toString(),
                    extraCards.Joker,
                    colors[Math.floor(Math.random() * 2)]
                );
            }
        } else {
            console.log('Maximum of 4 Jockers allowed!');
        }
    }

    console.log(gameDeck.showCards);
    console.log(gameDeck.numberOfCards);

    gameDeck.shuffle();
}

function dealingCards() {
    let playerCont = 0;

    while (gameDeck.numberOfCards != 0) {
        let card = gameDeck.drawCard();
        players.allPlayers[playerCont].playerDeck.addCard(card);

        if (playerCont == players.numberOfPlayers - 1) {
            playerCont = 0;
        } else {
            playerCont++;
        }
    }

    console.log(players.allPlayers);
    console.log(players.allPlayers[0].playerDeck);
    console.log(players.allPlayers[1].playerDeck);
}

function startGame() {
    createPlayers(2);
    createGameDeck(2);
    dealingCards();
}

startGame();