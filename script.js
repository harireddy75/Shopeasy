
let cartCount = 0;
let totalPrice = 0;

let cart = {};

function addToCart(productName, price) {

    cartCount++;
    totalPrice += price;

    document.getElementById("cart-count").innerText = cartCount;
    document.getElementById("total-price").innerText = totalPrice;

    if (cart[productName]) {
        cart[productName].quantity++;
    } else {
        cart[productName] = {
            price: price,
            quantity: 1
        };
    }

    renderCart();
    localStorage.setItem("cart", JSON.stringify(cart));
localStorage.setItem("totalPrice", totalPrice);
}

function renderCart() {

    let cartItems = document.getElementById("cart-items");

    cartItems.innerHTML = "";

    for (let product in cart) {

        let li = document.createElement("li");

        li.innerHTML =
            product +
            " | Qty: " +
            cart[product].quantity +
            " | ₹" +
            (cart[product].price * cart[product].quantity);

        cartItems.appendChild(li);
    }
}

function searchProducts() {

    let input = document.getElementById("search").value.toLowerCase();

    let cards = document.getElementsByClassName("card");

    for (let i = 0; i < cards.length; i++) {

        let title = cards[i]
            .getElementsByTagName("h3")[0]
            .innerText
            .toLowerCase();

        if (title.includes(input)) {
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }
    }
}