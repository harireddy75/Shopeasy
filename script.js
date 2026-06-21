
let cart = JSON.parse(localStorage.getItem("cart")) || {};
let totalPrice = Number(localStorage.getItem("totalPrice")) || 0;

let cartCount = 0;

for(let product in cart){
    cartCount += cart[product].quantity;
}

updateCartCount();

function updateCartCount(){
    let countElement = document.getElementById("cart-count");

    if(countElement){
        countElement.innerText = cartCount;
    }
}

function addToCart(productName, price){

    cartCount++;
    totalPrice += price;

    if(cart[productName]){
        cart[productName].quantity++;
    }
    else{
        cart[productName] = {
            price: price,
            quantity: 1
        };
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("totalPrice", totalPrice);

    updateCartCount();

    alert(productName + " added to cart!");
}

function searchProducts(){

    let input = document.getElementById("search").value.toLowerCase();

    let cards = document.getElementsByClassName("card");

    for(let i=0;i<cards.length;i++){

        let title = cards[i]
        .getElementsByTagName("h3")[0]
        .innerText
        .toLowerCase();

        if(title.includes(input)){
            cards[i].style.display = "block";
        }
        else{
            cards[i].style.display = "none";
        }
    }
}
