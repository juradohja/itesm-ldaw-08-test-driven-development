class BankAccount {

    constructor (balance) {
        this.balance = balance;
        this.hist = [];
    }

    current()  {
        return this.balance;
    }

    append(amount) {
        if(amount > 0.0) {
            this.balance += amount;
            this.hist.push({'operation' : 'append', 'amount' : amount});
        }
        return this.balance;
    }

    substract(amount) {
        if(amount > 0.0) {
            this.balance -= amount;
            this.hist.push({'operation' : 'substract', 'amount' : amount});
        }
        return this.balance;
    }

    merge(account) {
        this.balance += account.current();
        this.hist.push(...account.history());
    }

    history() {
        return this.hist;
    }

}

module.exports = BankAccount;