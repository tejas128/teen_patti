class Player {
    balance = 4000
    hand = []
    constructor(name, id){
        this.name = name    
        this.id = id
    }

    //Money Deduct
    deductMoney(amount){
        this.balance -= amount
    }
}

module.exports = Player