import { DiscountStrategy } from "./DiscountStrategy";
import { Cart } from "../models/Cart";

export class CompositeDiscount implements DiscountStrategy {
  constructor(private strategies: DiscountStrategy[]) {}

  calculate(cart: Cart): number {
    if (cart.hasSaleItems()) {
      return 0; // keine Rabatte auf Aktionsware
    }

    return this.strategies
      .map(s => s.calculate(cart))
      .reduce((sum, val) => sum + val, 0);
  }
}

