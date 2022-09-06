// 예제 1
const order = retreiveOrder();
const pricingPlan = retrievePricingPlan();
const chargePerUnit = pricingPlan.unit;
let charge;

// 예제 2
function someFunc() {
  const result =
    availableResources.length === 0
      ? createResource()
      : availableResources.pop();
  allocatedResources.push(result);
  return result;
}
