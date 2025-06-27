import { Product } from "./Product";
import { Customer } from "./Customer";

export class Cart {
  constructor(
    public customer: Customer,
    public products: Product[]
  ) {}

  getTotal(): number {
    return this.products.reduce((sum, p) => sum + p.price, 0);
  }

  hasSaleItems(): boolean {
    return this.products.some(p => p.isOnSale);
  }
}

