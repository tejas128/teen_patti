const Card = require("./Card");

class Deck {
    cards = []
    constructor(){
       this.initialize()
    }

    initialize(){
        const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
        const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

        this.cards = []

        for (const suit of suits){
            for (const rank of ranks){
                const newCard = new Card(suit, rank)
                this.cards.push(newCard)
            }
        } 
    }

    shuffle(){
        for(let i = 0 ; i < this.cards.length; i++){
            let temp = this.cards[i]
            let newIndex = Math.floor(Math.random() * 10)
            this.cards[i] = this.cards[newIndex]
            this.cards[newIndex] = temp
        }
        console.log(JSON.stringify(this.cards))
    }

}

module.exports = Deck