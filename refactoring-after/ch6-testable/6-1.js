/*
  문제점
  1. 가독성이 떨어진다. (한눈에 파악이 힘들다.)
  2. 재사용성이 떨어진다. 
  3. 버그가 발생했을 때 발견하기 힘들다.

  단계적으로 함수로 추출해나가는 리팩터링을 진행하자.

  꿀팁
  1. 지역변수는 사용하는 곳과 가까운곳에 선언하는 것이 좋다. (outstanding)
*/
export function printOwing(invoice, console, clock) {
  let outstanding = 0;

  console.log("***********************");
  console.log("**** Customer Owes ****");
  console.log("***********************");

  // calculate outstanding
  for (const o of invoice.orders) {
    outstanding += o.amount;
  }

  // record due date
  const today = clock.today;
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );

  //print details
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
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
