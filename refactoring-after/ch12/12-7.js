class Person {
  #name;
  #genderCode;
  constructor(name, genderCode) {
    this.#name = name;
    this.#genderCode = genderCode;
  }

  get name() {
    return this.#name;
  }

  get genderCode() {
    return this.#genderCode;
  }

  /* 관련 로직을 클래스 내부에서 제공하자 (응집도 ↑) */
  get isMail() {
    return this.genderCode === "M";
  }

  /* 복작합 생성 스크립트는 팩터리 메서드를 이용해서 제공하자. (응집도 ↑) */
  static create(record) {
    switch (record.gender) {
      case "M":
        return new Person(record.name, "M");
      case "F":
        return new Person(record.name, "F");
      default:
        return new Person(record.name, "X");
    }
  }
}

function loadFromInput(data) {
  const result = [];
  data.forEach((record) => {
    result.push(Person.create(record));
  });
  return result;
}

const people = loadFromInput([
  { name: "엘리", gender: "F" },
  { name: "철수", gender: "M" },
  { name: "밥", gender: "M" },
]);
const numberOfMales = people.filter((p) => p.isMail).length;
console.log(numberOfMales);
