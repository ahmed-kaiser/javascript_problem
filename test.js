function Activity(amount){
    this.amount = amount;
}

Activity.prototype = {
    
    constructor:Activity,

    setAmount(amount){
        if (amount <= 0){
            return false;
        }else{
            this.amount = amount;
            return true;
        }
    },

    getAmount(){
        return this.amount;
    }
}

function Payment(amount, receiver){
    Activity.call(this, amount);
    this.receiver = receiver;
}

Payment.prototype = {
    
    __proto__:Activity.prototype,

    constructor:Payment,

    setReceiver(receiver){
        this.receiver = receiver;
    },

    getReceiver(){
        return this.receiver;
    }
}

function Refund(amount, sender){
    Activity.call(this, amount);
    this.sender = sender;
}

Refund.prototype = {
    
    __proto__:Activity.prototype,

    constructor:Refund,

    setSender(sender){
        this.sender = sender;
    },

    getSender(){
        return this.sender;
    }
}


