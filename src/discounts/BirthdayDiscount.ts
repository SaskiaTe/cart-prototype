import { DiscountStrategy } from "./DiscountStrategy";
import { Cart } from "../models/Cart";

export class BirthdayDiscount implements DiscountStrategy {
  calculate(cart: Cart): number {
    const today = new Date();
    const birthday = cart.customer.birthday;
    const isBirthday =
      today.getDate() === birthday.getDate() &&
      today.getMonth() === birthday.getMonth();

    return isBirthday ? cart.getTotal() * 0.03 : 0;
  }
}

