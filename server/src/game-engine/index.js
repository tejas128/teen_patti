const Deck = require("./Deck")
const Player = require("./Player")

class TeenPattiGame {
    players = []
    started = false
    bootAmount = 50
    deck

    addPlayer(player){
        const newPlayer = new Player(player.name, player.id)
        this.players.push(newPlayer)
        if(this.players.length >  2 && !this.started){
            this.startGame()
        }
    }

    startGame(){

        //Marking game started
        this.started = true

        // Deducting boot amount from player balance in game start
        this.players = this.players.map((player) => {
            player.deductMoney(bootAmount)
            return player
        })

        //creating deck
        this.deck = new Deck()
        
    }
}

module.exports = TeenPattiGame