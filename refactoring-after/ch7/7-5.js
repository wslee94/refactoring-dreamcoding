class Person {
  #name;
  #telephoneNumber;
  constructor(name, areaCode, number) {
    this.#name = name;
    this.#telephoneNumber = new TelephoneNumber(areaCode, number);
  }

  get name() {
    return this.#name;
  }

  set name(arg) {
    this.#name = arg;
  }

  get telephoneNumber() {
    return this.#telephoneNumber.toString;
  }

  get officeAreaCode() {
    return this.#telephoneNumber.areaCode;
  }

  set officeAreaCode(arg) {
    this.#telephoneNumber.areaCode = arg;
  }

  get officeNumber() {
    return this.#telephoneNumber.number;
  }

  set officeNumber(arg) {
    this.#telephoneNumber.number = arg;
  }
}

class TelephoneNumber {
  #officeAreaCode;
  #officeNumber;
  constructor(areaCode, number) {
    this.#officeAreaCode = areaCode;
    this.#officeNumber = number;
  }

  get toString() {
    return `(${this.#officeAreaCode}) ${this.#officeNumber}`;
  }

  get areaCode() {
    return this.#officeAreaCode;
  }

  set areaCode(value) {
    this.#officeAreaCode = value;
  }

  get number() {
    return this.#officeNumber;
  }

  set number(value) {
    this.#officeNumber = value;
  }
}

const person = new Person("엘리", "010", "12345678");
console.log(person.name);
console.log(person.officeAreaCode);
console.log(person.officeNumber);
console.log(person.telephoneNumber);
