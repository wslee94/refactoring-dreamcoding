export class Order {
  #priority;

  constructor(data) {
    this.#priority = data.priority;
  }

  get priority() {
    return this.#priority;
  }
}

class Priority {
  static LOW = new Priority("low", 0);
  static NORMAL = new Priority("normal", 1);
  static HIGH = new Priority("high", 2);
  static RUSH = new Priority("rush", 3);
  static legalValues() {
    return ["low", "normal", "high", "rush"];
  }

  #name;
  #index;
  constructor(name, index) {
    if (Priority.legalValues().includes(name)) {
      this.#name = name;
      this.#index = index;
    } else {
      throw Error(`${name} is not valid for Priority`);
    }
  }

  get name() {
    return this.#name;
  }

  get index() {
    return this.#index;
  }

  higherThan(other) {
    return this.#index > other.index;
  }
}

const orders = [
  new Order({ priority: Priority.NORMAL }),
  new Order({ priority: Priority.HIGH }),
  new Order({ priority: Priority.RUSH }),
];

const highPriorityCount = orders.filter((o) =>
  o.priority.higherThan(Priority.NORMAL)
).length;
console.log(highPriorityCount);
