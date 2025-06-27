import { DiscountStrategy } from "./DiscountStrategy";
import { Cart } from "../models/Cart";

export class FirstPurchaseDiscount implements DiscountStrategy {
  calculate(cart: Cart): number {
    if (!cart.customer.isNewCustomer) return 0;

    const discount = cart.getTotal() * 0.05;
    return Math.min(discount, 100);
  }
}

