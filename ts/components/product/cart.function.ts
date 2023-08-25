import { CartItemProps } from "../cart/cart.interface.js";
import { ProductProps } from "./product.interface.js";
import { StorageKey } from "../../services/localStorageServices.js";
import { productStatus } from "../product/product.interface.js";
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from "../../services/localStorageServices.js";
import { calCartQuantity } from "../../utils/calculation.js";

export const addToCart = (product: ProductProps) => {
  console.log(product);
  const productToCart = {
    id: product?.id,
    name: product?.name,
    price: product?.price,
    image: product?.image,
    discount: product?.discount || null,
    quantity: 1,
  };

  // const cartItemsJson = localStorage.getItem("cartItems");
  const cartItemsJson = getFromLocalStorage(StorageKey.CartItems);
  const cartItems: CartItemProps[] = cartItemsJson;

  if (cartItems !== null) {
    //find if product exist in cart
    const productExists = cartItems.find(
      (item) => item.id === productToCart.id
    );

    if (!productExists) {
      cartItems.push(productToCart);
      // localStorage.setItem("cartItems", JSON.stringify(cartItems));
      saveToLocalStorage(StorageKey.CartItems, cartItems);
      return;
    } else {
      const cartItemToUpdate = cartItems.find(function (item) {
        return item.id === productToCart.id;
      });
      if (cartItemToUpdate) {
        cartItemToUpdate.quantity += 1;
      }

      // localStorage.setItem("cartItems", JSON.stringify(cartItems));
      saveToLocalStorage(StorageKey.CartItems, cartItems);
    }
  } else {
    // localStorage.setItem("cartItems", JSON.stringify([productToCart]));
    saveToLocalStorage(StorageKey.CartItems, [productToCart]);
  }

  updateCartQty();
};

export const updateCartQty = () => {
  const cartQuantity = document.getElementById("cart-quantity");

  // const cartItemsJson = localStorage.getItem("cartItems");
  const cartItemsJson = getFromLocalStorage(StorageKey.CartItems);
  const cartItems: CartItemProps[] = cartItemsJson;

  const cartQuantityNum = calCartQuantity(cartItems);

  if (cartQuantity !== null) {
    if (cartQuantityNum > 0) {
      cartQuantity.style.display = "block";
    }

    cartQuantity.textContent = cartQuantityNum.toString();
  } else {
    console.error("Element with ID 'cart-quantity' not found in the DOM.");
  }
};
