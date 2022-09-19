// 예제 1
function setWidth(value) {
  this._width = value;
}

function setHight(value) {
  this._height = value;
}

// 예제 2
class Concert {
  regularBook(customer) {}
  premiumBook(customer) {}
  // 만약 공통 로직을 꼭 사용해야하는 경우라면, 아래처럼 코드를 작성해도 무방하다.
  regularBook(customer) { this.#book(customer, false) }
  premiumBook(customer) { this.#book(customer, true) }
  #book(customer, isPremium) {}
}

// 예제 3
function switchOn();
function switchOff();
