import { CartItemProps } from "./cart.interface.js";

export class CartItem implements CartItemProps {
  id: number;
  name: string;
  image: string;
  price: number;
  discount: number | null;
  quantity: number;
  constructor({ id, name, image, price, discount, quantity }: CartItemProps) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.price = price;
    this.discount = discount;
    this.quantity = quantity;
  }
}

export const cartItemsJson = localStorage.getItem("cartItems");
export const cartItems: CartItemProps[] = cartItemsJson
  ? JSON.parse(cartItemsJson)
  : [];

export const cartItemsArr = cartItems.map(
  (cart: CartItemProps) => new CartItem(cart)
);
