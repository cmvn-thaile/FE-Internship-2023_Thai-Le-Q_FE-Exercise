import { resetCart } from "./cart-index.js";
export class CartItem {
    constructor({ id, name, image, price, discount, quantity }) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.price = price;
        this.discount = discount;
        this.quantity = quantity;
    }
}
export const cartItemsJson = localStorage.getItem("cartItems");
export const cartItems = cartItemsJson
    ? JSON.parse(cartItemsJson)
    : [];
export const cartItemsArr = cartItems.map((cart) => new CartItem(cart));
export class Cart {
    constructor({ id, name, image, price, discount, quantity }) {
        this.cartItems = [];
        this.id = id;
        this.name = name;
        this.image = image;
        this.price = price;
        this.discount = discount;
        this.quantity = quantity;
        this.cartItems = cartItems;
    }
    delete(id) {
        const cartItemsJson = localStorage.getItem("cartItems");
        const cartItems = cartItemsJson
            ? JSON.parse(cartItemsJson)
            : [];
        const newCartItems = cartItems.filter((cartItem) => cartItem.id !== id);
        localStorage.setItem("cartItems", JSON.stringify(newCartItems));
        resetCart(id);
    }
}
//# sourceMappingURL=cart.entity.js.map