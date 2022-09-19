export class Employee {
  // 타입스크립트에서는 생성자를 private로 선언할 수 있음 (외부에서 생성자 호출 못함)
  constructor(name, typeCode) {
    this._name = name;
    this._typeCode = typeCode;
  }
  get name() {
    return this._name;
  }

  get type() {
    return Employee.legalTypeCodes[this._typeCode];
  }

  static get legalTypeCodes() {
    return { E: "Engineer", M: "Manager", S: "Salesman" };
  }

  static createEngineer(name) {
    return new Employee(name, "E");
  }

  static createManager(name) {
    return new Employee(name, "M");
  }

  static createSalesman(name) {
    return new Employee(name, "S");
  }
}

Employee.createEngineer("wslee");
