targetTemperature(aPlan, thermostat.currentTemperature);

// 다른모듈에 있는 함수라고 가정
function targetTemperature(plan, currentTemperature) {
  // ...
}

// thermostat -> 전역적인 혹은 외부 스코프 객체에 직접 접근하는 것은, 결합도가 매우 높다.
// 내부 모듈 내에서 서로 연관된 데이터와 밀접하게 관련된 행동이 있는 경우 응집도가 높은 경우, 질의함수
// 모듈 간에는 질의함수를 직접 호출하는 것 보다는 필요한 데이터만 매개변수로 전달 받는게 좋다.
