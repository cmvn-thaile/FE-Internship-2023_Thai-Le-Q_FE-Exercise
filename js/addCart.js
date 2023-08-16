//add to cart
export const addToCart = (id) => {
  const product = document.getElementById(`product-${id}`);
  console.log(product);

  //current product
  const productToCart = {
    id: product?.id,
    name: product?.name,
    price: product?.price,
    quantity: 1,
  };

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

  // updateQuantityCart();
};
const cartItems = JSON.parse(localStorage.getItem("cartItems"));
// if (cartItems) {
//   updateQuantityCart();
// }

// change cart icon count product in cart
//get cart i4

//update cart quantity
// const updateQuantityCart = () => {
//   //create cart icon group
//   const cartQuantity = document.createElement("span");
//   cartQuantity.className = "cart-quantity";
//   const cartIconGroup = document.getElementsByClassName("link-cart")[0];
//   const cartItems = JSON.parse(localStorage.getItem("cartItems"));
//   cartQuantity.textContent = cartItems.reduce(
//     (accumulator, item) => accumulator + item.quantity,
//     0
//   );
//   cartIconGroup.appendChild(cartQuantity);
// };
