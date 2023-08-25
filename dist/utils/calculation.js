export const calDiscountPrice = (price, discount) => {
    return price - parseFloat(((price * discount) / 100).toFixed(2));
};
export const calCartQuantity = (cartItems) => {
    return cartItems.reduce((accumulator, item) => {
        return accumulator + item.quantity;
    }, 0);
};
export const calSubTotal = (price, quantity, discount) => {
    if (discount) {
        return (calDiscountPrice(price, discount) * quantity).toFixed(2);
    }
    else {
        return (price * quantity).toFixed(2);
    }
};
//# sourceMappingURL=calculation.js.map