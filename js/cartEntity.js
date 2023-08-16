import { Product } from "./productEntity.js";

class cartItems extends Product {
  super(name, price, quantity, id) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}
