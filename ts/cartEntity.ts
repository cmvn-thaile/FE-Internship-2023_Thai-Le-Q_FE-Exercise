import { Product } from "./productEntity.js";

export class Cart extends Product {
  quantity: number;

  constructor(
    id: number,
    name: string,
    image: string,
    price: number,
    discount: number | null,
    quantity: number
  ) {
    super(id, name, image, price, discount);
    this.quantity = quantity;
  }
}

export interface CartItemIF {
  id: number;
  name: string;
  image: string;
  price: number;
  discount: number | null;
  quantity: number;
}

const cartItemsJson = localStorage.getItem("cartItems");
const cartItems: CartItemIF[] = cartItemsJson ? JSON.parse(cartItemsJson) : [];

export const cartItemsArr = cartItems.map(
  (cart) =>
    new Cart(
      cart.id,
      cart.name,
      cart.image,
      cart.price,
      cart.discount,
      cart.quantity
    )
);
