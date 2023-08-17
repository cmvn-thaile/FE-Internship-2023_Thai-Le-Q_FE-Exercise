import { Product } from "./productEntity.js";

export class Cart extends Product {
  constructor(id, name, image, price, discount) {
    super(id, name, image, price, discount);
    this.quantity = quantity;
  }
}
