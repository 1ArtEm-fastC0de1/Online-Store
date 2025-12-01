let cart = [];
window.addEventListener("click", function (event) {
    if (event.target.hasAttribute("data-cart")) {

        const card = event.target.closest(".product-card");
        const product = {
            id: card.dataset.id,
            title: card.querySelector("h2").innerText,
            price: parseInt(card.querySelector(".price").innerText),
            img: card.querySelector("img").src,
            count: parseInt(card.querySelector(".items__current").innerText)
        };

        const existing = cart.find(item => item.id === product.id);

        if (existing) {
            existing.count += product.count;
        } else {
            cart.push(product);
        }

        updateCartUI();
    }
});
function updateCartUI() {
    const cartItemsBox = document.querySelector("#cart-items");
    cartItemsBox.innerHTML = "";

    let totalPrice = 0;
    let totalCount = 0;

    cart.forEach(item => {
        totalPrice += item.price * item.count;
        totalCount += item.count;

        cartItemsBox.insertAdjacentHTML("beforeend", `
        <div class="cart-item" data-id="${item.id}">
            <img src="${item.img}" class="cart-item-img">
            <div class="cart-item-info">
                <h4>${item.title}</h4>
                <div>${item.price} грн × ${item.count} шт</div>
            </div>
            <button class="remove-btn" data-remove>✖</button>
        </div>
        `);
    });

    document.querySelectorAll("#cart-count").forEach(el => el.innerText = totalCount);

    document.querySelector("#checkout-btn").innerText = `Оформити замовлення — ${totalPrice} грн`;

    attachDeleteHandlers();
}
function attachDeleteHandlers() {
    document.querySelectorAll("[data-remove]").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = btn.closest(".cart-item").dataset.id;
            cart = cart.filter(item => item.id !== id);
            updateCartUI();
        });
    });
}


const cartPanel = document.getElementById('cart-panel');
const cartOverlay = document.getElementById('cart-overlay');
const cartIcon = document.querySelector('.cart-header');

cartIcon.addEventListener('click', () => {
    cartPanel.classList.add('active');
    cartOverlay.classList.add('active');
});

cartOverlay.addEventListener('click', () => {
    cartPanel.classList.remove('active');
    cartOverlay.classList.remove('active');
});