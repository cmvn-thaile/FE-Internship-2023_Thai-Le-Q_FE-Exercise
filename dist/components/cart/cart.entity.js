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
//# sourceMappingURL=cart.entity.js.map