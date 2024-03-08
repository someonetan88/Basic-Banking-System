class BankAccount {
    constructor(initialBalance = 0) {
        this.balance = initialBalance;
    }

    deposit(amount) {
        setTimeout(() => {
            this.balance += amount;
            console.log(`Deposited ${amount}. New balance is ${this.balance}`);
        }, 1000);
    }

    withdraw(amount) {
        setTimeout(() => {
            if (amount > this.balance) {
                console.log("Insufficient balance");
            } else {
                this.balance -= amount;
                console.log(`Withdrawn ${amount}. New balance is ${this.balance}`);
            }
        }, 1000);
    }
}

const account = new BankAccount(50);
account.deposit(50);
account.withdraw(30);
