import { Product } from "./productEntity.js";

export class Cart extends Product {
  constructor(id, name, image, price, discount,quantity) {
    super(id, name, image, price, discount);
    this.quantity = quantity;
  }
}

const cartItems = JSON.parse(localStorage.getItem("cartItems"));

export const cartItemsArr = cartItems.map(
  (cart) =>
    new Cart(
      cart.id,
      cart.name,
      cart.image,
      cart.price,
      cart.discount,
      cart.quantity,
    )
);