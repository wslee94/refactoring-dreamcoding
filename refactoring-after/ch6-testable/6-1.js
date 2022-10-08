/*
  문제점
  1. 가독성이 떨어진다. (한눈에 파악이 힘들다.)
  2. 재사용성이 떨어진다. 
  3. 버그가 발생했을 때 발견하기 힘들다.

  단계적으로 함수로 추출해나가는 리팩터링을 진행하자.

  꿀팁
  1. 지역변수는 사용하는 곳과 가까운곳에 선언하는 것이 좋다. (outstanding)
*/

class Owing {
  #invoice;
  #console;
  #clock;

  constructor(invoice, console, clock) {
    this.#invoice = invoice;
    this.#console = console;
    this.#clock = clock;
  }

  get outstanding() {
    return this.#invoice.orders.reduce((acc, o) => (acc += o.amount), 0);
  }

  printBanner() {
    this.#console.log("***********************");
    this.#console.log("**** Customer Owes ****");
    this.#console.log("***********************");
  }

  recordDueDate() {
    const today = this.#clock.today;
    this.#invoice.dueDate = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + 30
    );
  }

  printDetail() {
    this.#console.log(`name: ${this.#invoice.customer}`);
    this.#console.log(`amount: ${this.outstanding}`);
    this.#console.log(`due: ${this.#invoice.dueDate.toLocaleDateString()}`);
  }
}

export function printOwing(invoice, console, clock) {
  const owing = new Owing(invoice, console, clock);
  owing.printBanner();
  owing.recordDueDate();
  owing.printDetail();
}

const invoice = {
  orders: [{ amount: 2 }, { amount: 5 }],
  customer: "엘리",
};

class Clock {
  constructor() {}

  get today() {
    return new Date();
  }
}

printOwing(invoice, console, new Clock());
