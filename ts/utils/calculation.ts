import { CartItemProps } from "../components/cart/cart.interface.js";

export const calDiscountPrice = (price: number, discount: number): number => {
  return price - parseFloat(((price * discount) / 100).toFixed(2));
};

export const calCartQuantity = (cartItems: CartItemProps[]) => {
  return cartItems.reduce((accumulator, item) => {
    return accumulator + item.quantity;
  }, 0);
};

export const calSubTotal = (
  price: number,
  quantity: number,
  discount?: number
) => {
  if (discount) {
    return (calDiscountPrice(price, discount) * quantity).toFixed(2);
  } else {
    return (price * quantity).toFixed(2);
  }
};
