import { Product } from "./productEntity.js";
export class Cart extends Product {
    constructor(id, name, image, price, discount, quantity) {
        super(id, name, image, price, discount);
        this.quantity = quantity;
    }
}
const cartItemsJson = localStorage.getItem("cartItems");
const cartItems = cartItemsJson ? JSON.parse(cartItemsJson) : [];
export const cartItemsArr = cartItems.map((cart) => new Cart(cart.id, cart.name, cart.image, cart.price, cart.discount, cart.quantity));
//# sourceMappingURL=cartEntity.js.map