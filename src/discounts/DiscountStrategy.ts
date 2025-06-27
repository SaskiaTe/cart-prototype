import { Cart } from "../models/Cart";

export interface DiscountStrategy {
  calculate(cart: Cart): number;
}

