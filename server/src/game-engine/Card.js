class Card {
    suit
    rank
    cardString

    constructor(suit, rank){
        this.suit = suit
        this.rank = rank
        this.cardToString()
    }

    cardToString(){
        this.cardString = this.suit + "-" + this.rank
    }
}

module.exports = Card