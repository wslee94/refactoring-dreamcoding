/*
  책에서는 
  discount 대신 quantityDiscount
  shpping 대신 shippingCost
  를 사용했다.
  하지만, 간단하게 줄일 수 있는 변수이름은 간단하게 짓자. (코드 문맥을 이해할 수 있는 범주에서)
  너무 긴 변수이름은 오히려 가독성이 떨어진다.
*/

export function price(order) {
  // 가격(price) = 기본가격 - 수량할인 + 배송비
  const basePrice = order.quantity * order.itemPrice;
  const discount = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
  const shipping = Math.min(order.quantity * order.itemPrice * 0.1, 100);

  return basePrice - discount + shipping;
}
