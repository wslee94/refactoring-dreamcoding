export class Account {
  constructor(accountType, daysOverdrawn) {
    this.type = accountType;
    this._daysOverdrawn = daysOverdrawn;
  }

  get bankCharge() {
    let result = 4.5;
    if (this._daysOverdrawn > 0) result += this.overdraftCharge;
    return result;
  }

  /* 
    내 생각에는 AccountType으로 옮기는 것은 굳이? 라는 생각이 든다.
    AccountType의 클래스 이름에서 AccountType의 관련된 액션을 취해야하는데, 
    요금 계산은 Account에서만 진행하는 것이 더 좋을 것 같다.
  */
  get overdraftCharge() {
    if (!this.type.isPremium) return this._daysOverdrawn * 1.75;

    const baseCharge = 10;
    return this._daysOverdrawn <= 7
      ? baseCharge
      : baseCharge + (this._daysOverdrawn - 7) * 0.85;
  }

  get daysOverdrawn() {
    return this._daysOverdrawn;
  }
}

export class AccountType {
  constructor(type) {
    this._type = type;
  }
  get isPremium() {
    return this._type === "Premium";
  }
}
