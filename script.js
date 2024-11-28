// script.js
let cart = [];

function addToCart(product, price) {
  cart.push({ product, price });
  updateCart();
}

function updateCart() {
  const cartItemsDiv = document.getElementById("cart-items");

  // Clear current cart display
  cartItemsDiv.innerHTML = "";

  if (cart.length === 0) {
    cartItemsDiv.innerHTML = "<p>Your cart is empty.</p>";
  } else {
    let total = 0;
    cart.forEach((item) => {
      cartItemsDiv.innerHTML += `<p>${item.product} - $${item.price}</p>`;
      total += item.price;
    });
    cartItemsDiv.innerHTML += `<p>Total: $${total.toFixed(2)}</p>`;
  }
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty! Add items to the cart before checking out.");
  } else {
    alert("Proceeding to checkout...");
  }
}
