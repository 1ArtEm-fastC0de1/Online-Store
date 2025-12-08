function toggleCartStatus() {

    const cartWrapper = document.querySelector('.cart-wrapper');
    const emptyCart = document.querySelector('#empty-cart');
    const checkoutBtn = document.querySelector('#checkout-btn');

    if (cartWrapper.children.length > 0) {
        emptyCart.style.display = "none";
        checkoutBtn.style.display = "block";
    } else {
        emptyCart.style.display = "block";
        checkoutBtn.style.display = "none";
    }
}