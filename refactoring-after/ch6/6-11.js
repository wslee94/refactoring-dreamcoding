export function priceOrder(product, quantity, shippingMethod) {
  const basePrice = calculateBasePrice(quantity, product.basePrice);
  const discount = calculateDiscount(quantity, product);
  const shippingCost = calculateShipping(quantity, basePrice, shippingMethod);
  return basePrice - discount + shippingCost;
}

function calculateBasePrice(quantity, basePrice) {
  return basePrice * quantity;
}

function calculateDiscount(quantity, product) {
  return (
    Math.max(quantity - product.discountThreshold, 0) *
    product.basePrice *
    product.discountRate
  );
}

function calculateShipping(quantity, basePrice, shippingMethod) {
  /* 
    shippingPerCase를 따로 함수로 분리하지 않은 이유
    필요한건 총 배송비 이므로 굳이 분리하지 않았고, 
    서로 연관된 데이터여서 하나의 함수(단계)로 묶음
  */
  const shippingPerCase =
    basePrice > shippingMethod.discountThreshold
      ? shippingMethod.discountedFee
      : shippingMethod.feePerCase;

  return quantity * shippingPerCase;
}

// 사용 예:
const product = {
  basePrice: 10,
  discountRate: 0.1,
  discountThreshold: 10,
};

const shippingMethod = {
  discountThreshold: 20,
  feePerCase: 5,
  discountedFee: 3,
};

const price = priceOrder(product, 5, shippingMethod);
console.log(price);
