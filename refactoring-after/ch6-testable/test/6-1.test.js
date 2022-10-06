import { printOwing } from "../6-1.js";

class Console {
  #content;
  constructor() {
    this.#content = "";
  }

  log(text) {
    this.#content += `${text}\n`;
  }

  get content() {
    return this.#content;
  }
}

class Clock {
  constructor() {}

  get today() {
    return {
      getFullYear() {
        return 2022;
      },
      getMonth() {
        return 9;
      },
      getDate() {
        return 7;
      },
    };
  }
}

describe("printOwing", () => {
  it("should pring owing", () => {
    const invoice = {
      orders: [{ amount: 2 }, { amount: 5 }],
      customer: "엘리",
    };
    const expected =
      "***********************\n" +
      "**** Customer Owes ****\n" +
      "***********************\n" +
      "name: 엘리\n" +
      "amount: 7\n" +
      "due: 2022. 11. 6.\n";

    const console = new Console();
    printOwing(invoice, console, new Clock());

    expect(console.content).toBe(expected);
  });
});
