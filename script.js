let cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartCount = document.getElementById("cart-count");
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    updateCart();
}
function updateCart() {
    cartCount.textContent = cart.length;
    localStorage.setItem("cart", JSON.stringify(cart));
}
function renderCart() {
    const cartContainer = document.getElementById("cart-container");
    const cartCount = document.getElementById("cart-count");
    let totalPrice = 0;

    cartContainer.innerHTML = "";
    cart.forEach((item, index) => {
        totalPrice += item.price;
        cartContainer.innerHTML += `
            <div class="cart-item">
                <p>${item.name} - Rs. ${item.price}</p>
                <button onclick="removeFromCart(${index})">Remove</button>
                <button onclick="addToWishlist(${index})">Add to Wishlist</button>
            </div>
        `;
    });

    document.getElementById("total-price").textContent = totalPrice;
    cartCount.textContent = cart.length;
}
function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}
function addToWishlist(index) {
    const item = cart[index];
    wishlist.push(item);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    removeFromCart(index);
}
function renderWishlist() {
    const wishlistContainer = document.getElementById("wishlist-container");
    wishlistContainer.innerHTML = "";

    wishlist.forEach((item, index) => {
        wishlistContainer.innerHTML += `
            <div class="wishlist-item">
                <p>${item.name} - Rs. ${item.price}</p>
                <button onclick="removeFromWishlist(${index})">Remove</button>
            </div>
        `;
    });
}
function removeFromWishlist(index) {
    wishlist.splice(index, 1);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    renderWishlist();
}
