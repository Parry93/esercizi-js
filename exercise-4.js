class BankAccount {
    total = 0;
  constructor(total) {
    this.total = total;
  }

  deposit(cash) {
    this.total += cash;
    return this.total;
  }
  withdraw(cash) {
    this.total -= cash;
    return this.total;
  }
  view() {
    console.log(this.total);
  }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();
