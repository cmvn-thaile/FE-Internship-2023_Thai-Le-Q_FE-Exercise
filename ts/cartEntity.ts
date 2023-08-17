export interface CartItemIF {
  id: number;
  name: string;
  image: string;
  price: number;
  discount: number | null;
  quantity: number;
}
export class CartItem implements CartItemIF {
  id: number;
  name: string;
  image: string;
  price: number;
  discount: number | null;
  quantity: number;
  constructor({ id, name, image, price, discount, quantity }: CartItemIF) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.price = price;
    this.discount = discount;
    this.quantity = quantity;
  }
}

export const cartItemsJson = localStorage.getItem("cartItems");
export const cartItems: CartItemIF[] = cartItemsJson
  ? JSON.parse(cartItemsJson)
  : [];

export const cartItemsArr = cartItems.map(
  (cart: CartItemIF) => new CartItem(cart)
);
