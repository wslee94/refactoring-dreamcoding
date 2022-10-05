// 변환함수는 클래스로 리팩터링한다.
class Performance {
  #audience;
  #play;

  constructor(audience, play) {
    this.#audience = audience;
    this.#play = play;
  }

  get audience() {
    return this.#audience;
  }

  get play() {
    return this.#play;
  }

  // 생성자가 복잡한 경우 static 팩터리 함수 활용
  static create(audience, play) {
    switch (play.type) {
      case "tragedy": // 비극
        return new Tragedy(audience, play);
      case "comedy": // 희극
        return new Comedy(audience, play);
      default:
        throw new Error(`알 수 없는 장르: ${this.#play.type}`);
    }
  }
}

class Tragedy extends Performance {
  constructor(audience, play) {
    super(audience, play);
  }

  get amount() {
    let result = 40000;
    if (this.audience > 30) {
      result += 1000 * (this.audience - 30);
    }
    return result;
  }

  get credits() {
    return Math.max(this.audience - 30, 0);
  }
}

class Comedy extends Performance {
  constructor(audience, play) {
    super(audience, play);
  }

  get amount() {
    let result = 30000;
    if (this.audience > 20) {
      result += 10000 + 500 * (this.audience - 20);
    }
    result += 300 * this.audience;
    return result;
  }

  get credits() {
    return Math.max(this.audience - 30, 0) + Math.floor(this.audience / 5);
  }
}

class Statement {
  #customer;
  #performances;

  constructor(customer, performances) {
    this.#customer = customer;
    this.#performances = performances;
  }

  get customer() {
    return this.#customer;
  }

  get performances() {
    return [...this.#performances];
  }

  // 계산 로직은 질의함수(getter)로 만든다. 호출 시 재계산. / setter나 다른 메서드에서 값을 설정 시 누락할 가능성이 높음
  get totalAmount() {
    return this.#performances.reduce((acc, p) => acc + p.amount, 0);
  }

  get totalCredits() {
    return this.#performances.reduce((acc, p) => acc + p.credits, 0);
  }
}

export function createStatement(invoice, plays) {
  const performances = invoice.performances.map((p) =>
    Performance.create(p.audience, plays[p.playID])
  );

  return new Statement(invoice.customer, performances);
}
