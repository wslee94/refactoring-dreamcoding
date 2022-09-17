function calculateCharge(date, quantity, plan) {
  const isSummer =
    !date.isBefore(plan.summerStart) && !date.isAfter(plan.summerEnd);
  const summerCharge = quantity * plan.summerRate;
  const regularCharge = quantity * plan.regularRate + plan.regularServiceCharge;
  return isSummer ? summerCharge : regularCharge;
}

function calculateChargeWithClass(date, quantity, plan) {
  const charge = new Charge(date, quantity, plan);
  return charge.isSummer ? charge.summerCharge : charge.regularCharge;
}

class Charge {
  #date;
  #quantity;
  #plan;

  constructor(date, quantity, plan) {
    this.#date = date;
    this.#quantity = quantity;
    this.#plan = paln;
  }

  get isSummer() {
    return (
      !this.#date.isBefore(this.#plan.summerStart) &&
      !this.#date.isAfter(this.#plan.summerEnd)
    );
  }

  get summerCharge() {
    return this.#quantity * this.#plan.summerRate;
  }

  get regularCharge() {
    this.#quantity * this.#plan.regularRate + this.#plan.regularServiceCharge;
  }
}
