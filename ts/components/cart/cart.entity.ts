import {
  StorageKey,
  getFromLocalStorage,
} from "../../services/localStorageServices.js";
import { resetCart } from "./cart-index.js";
import { CartItemProps, CartProps } from "./cart.interface.js";

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

export class Cart implements CartProps {
  cartItems: CartItem[] = [];

  id: number;
  name: string;
  image: string;
  price: number;
  discount: number | null;
  quantity: number;
  constructor({ id, name, image, price, discount, quantity }: CartProps) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.price = price;
    this.discount = discount;
    this.quantity = quantity;
    this.cartItems = cartItems;
  }

  delete(id: number) {
    const cartItemsJson = localStorage.getItem("cartItems");
    const cartItems: CartItemProps[] = cartItemsJson
      ? JSON.parse(cartItemsJson)
      : [];
    const newCartItems = cartItems.filter((cartItem) => cartItem.id !== id);
    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    resetCart(id);
  }
}
