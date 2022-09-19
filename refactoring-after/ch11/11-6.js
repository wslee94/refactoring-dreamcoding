targetTemperature(aPlan, thermostat.currentTemperature);

// 다른모듈에 있는 함수라고 가정
function targetTemperature(plan, currentTemperature) {
  // ...
}

// thermostat -> 전역적인 혹은 외부 스코프 객체에 직접 접근하는 것은, 결합도가 매우 높다.
