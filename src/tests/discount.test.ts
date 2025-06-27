import { Customer } from "../models/Customer";
import { Product } from "../models/Product";
import { Cart } from "../models/Cart";
import { FirstPurchaseDiscount } from 
"../discounts/FirstPurchaseDiscount";
import { BirthdayDiscount } from "../discounts/BirthdayDiscount";
import { CompositeDiscount } from "../discounts/CompositeDiscount";

test("Neukundenrabatt: max 100 CHF", () => {
  const customer = new Customer("Max", true, new Date("1990-01-01"));
  const products = [new Product("TV", 3000)];
  const cart = new Cart(customer, products);

  const discount = new FirstPurchaseDiscount().calculate(cart);
  expect(discount).toBe(100);
});

test("Geburtstagsrabatt: 3%", () => {
  const today = new Date();
  const customer = new Customer("Lisa", false, today);
  const products = [new Product("Buch", 100)];
  const cart = new Cart(customer, products);

  const discount = new BirthdayDiscount().calculate(cart);
  expect(discount).toBeCloseTo(3);
});

test("Doppelrabatt nicht erlaubt (Produkt auf Aktion)", () => {
  const today = new Date();
  const customer = new Customer("Anna", true, today);
  const products = [new Product("Buch", 100, true)];
  const cart = new Cart(customer, products);

  const composite = new CompositeDiscount([
    new FirstPurchaseDiscount(),
    new BirthdayDiscount(),
  ]);

  const discount = composite.calculate(cart);
  expect(discount).toBe(0);
});

