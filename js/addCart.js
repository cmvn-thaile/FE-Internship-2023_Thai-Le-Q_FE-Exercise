export const addToCart = (product) => {
  console.log(product);
  const productToCart = {
    id: product?.id,
    name: product?.name,
    price: product?.price,
    image: product?.image,
    discount: product?.discount || null,
    quantity: 1,
  };
  const cartItems = JSON.parse(localStorage.getItem("cartItems"));

  if (cartItems !== null) {
    //find if product exist in cart
    const productExists = cartItems.find(
      (item) => item.id === productToCart.id
    );

    if (!productExists) {
      cartItems.push(productToCart);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      return;
    } else {
      const cartItemToUpdate = cartItems.find(function (item) {
        return item.id === productToCart.id;
      });

      cartItemToUpdate.quantity += 1;

      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  } else {
    localStorage.setItem("cartItems", JSON.stringify([productToCart]));
  }

  updateCartQty();
};

export const updateCartQty = () => {
  const cartQuantity = document.getElementById("cart-quantity");
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  const cartQuantityNum = cartItems.reduce(
    (accumulator, item) => accumulator + item.quantity,
    0
  );
  if ((cartQuantityNum > 0)) {
    cartQuantity.style.display = "block";
  }

  cartQuantity.textContent = cartQuantityNum;
};
