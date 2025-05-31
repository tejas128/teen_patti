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


}

module.exports = Deck