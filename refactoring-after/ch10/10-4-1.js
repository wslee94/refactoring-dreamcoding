class Bird {
  #name;
  #numberOfCoconuts;
  #voltage;
  #isNailed;
  constructor({ name, numberOfCoconuts, voltage, isNailed }) {
    this.#name = name;
    this.#numberOfCoconuts = numberOfCoconuts;
    this.#voltage = voltage;
    this.#isNailed = isNailed;
  }

  get name() {
    return this.#name;
  }

  get numberOfCoconuts() {
    return this.#numberOfCoconuts;
  }

  get voltage() {
    return this.#voltage;
  }

  get isNailed() {
    return this.#isNailed;
  }

  get plumage() {
    return "unknown";
  }

  get airSpeedVelocity() {
    return null;
  }
}

class EuropeanSwallow extends Bird {
  get plumage() {
    return "average";
  }

  get airSpeedVelocity() {
    return 35;
  }
}

class AfricanSwallow extends Bird {
  get plumage() {
    return this.numberOfCoconuts > 2 ? "tired" : "average";
  }

  get airSpeedVelocity() {
    return 40 - 2 * this.numberOfCoconuts;
  }
}

class NorwegianBlueParrot extends Bird {
  get plumage() {
    return this.voltage > 100 ? "scorched" : "beautiful";
  }

  get airSpeedVelocity() {
    return this.isNailed ? 0 : 10 + this.voltage / 10;
  }
}

const birds = [
  new EuropeanSwallow({
    type: "EuropeanSwallow",
    name: "~~ 참새",
    numberOfCoconuts: 1,
    voltage: 1,
    isNailed: false,
  }),
  new AfricanSwallow({
    type: "AfricanSwallow",
    name: "~~ 제비",
    numberOfCoconuts: 2,
    voltage: 2,
    isNailed: true,
  }),
  new NorwegianBlueParrot({
    type: "NorwegianBlueParrot",
    name: "~~ 앵무새",
    numberOfCoconuts: 3,
    voltage: 3,
    isNailed: false,
  }),
  new Bird({
    type: "unknown",
    name: "미정",
    numberOfCoconuts: 4,
    voltage: 4,
    isNailed: false,
  }),
];

export function plumages(birds) {
  return new Map(birds.map((b) => [b.name, b.plumage]));
}
export function speeds(birds) {
  return new Map(birds.map((b) => [b.name, b.airSpeedVelocity]));
}

console.log(plumages(birds));
console.log(speeds(birds));
