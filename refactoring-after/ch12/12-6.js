class Employee {
  #name;
  constructor(name, type) {
    this.#name = name;
  }

  get type() {
    return "employee";
  }

  toString() {
    return `${this.#name} (${this.type})`;
  }

  // 만약 서버 데이터 JSON 형태로 데이터를 받아올 경우 아래 메서드를 통해 생성
  #createEmployee(name, type) {
    switch (type) {
      case "engineer":
        return new Engineer(name);
      case "salesperson":
        return new Manager(name);
      default:
        throw new Error(`${type}라는 직원 유형은 없습니다.`);
    }
  }
}

class Engineer extends Employee {
  get type() {
    return "engineer";
  }
}

class Manager extends Employee {
  get type() {
    return "manager";
  }
}

const ellie = new Engineer("엘리");
const bob = new Manager("밥");
