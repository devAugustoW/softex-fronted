var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Product } from './entities/product.js';
import { Cart } from './entities/cart.js';
import { renderProduct } from './views/renderProduct.js';
import { renderCart } from './views/renderCart.js';
const cart = new Cart();
function loadProducts() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch('./data.json');
            const data = yield response.json();
            const productContainer = document.querySelector('.product-container');
            if (!productContainer) {
                throw new Error("Elemento '.product-container' não encontrado no DOM");
            }
            productContainer.innerHTML = '';
            data.forEach((item) => {
                const product = new Product(item.id, item.name, item.category, item.price, item.image.thumbnail);
                const productHTML = renderProduct(product);
                productContainer.insertAdjacentHTML('beforeend', productHTML);
                setupProductEventListeners(product);
            });
        }
        catch (error) {
            console.error('Erro ao carregar os produtos:', error);
        }
    });
}
function setupProductEventListeners(product) {
    const btnCardContainer = document.querySelector(`.btn-card-container[data-id="${product.id}"]`);
    const btnAddToCart = btnCardContainer.querySelector('.btn-add-to-cart');
    const btnQuantityControl = btnCardContainer.querySelector('.btn-quantity-control');
    const btnDecrease = btnCardContainer.querySelector('.btn-decrease');
    const btnIncrease = btnCardContainer.querySelector('.btn-increase');
    const itemCount = btnCardContainer.querySelector('.item-count');
    btnAddToCart.addEventListener('click', () => {
        cart.addItem(product);
        updateProductUI(product, itemCount, btnAddToCart, btnQuantityControl, btnCardContainer);
        updateCartUI();
    });
    btnIncrease.addEventListener('click', () => {
        cart.addItem(product);
        updateProductUI(product, itemCount, btnAddToCart, btnQuantityControl, btnCardContainer);
        updateCartUI();
    });
    btnDecrease.addEventListener('click', () => {
        const cartItem = cart.getItems().find(item => item.product.id === product.id);
        if (cartItem) {
            if (cartItem.quantity > 1) {
                cart.updateItemQuantity(product.id, cartItem.quantity - 1);
            }
            else {
                cart.removeItem(product.id);
            }
            updateProductUI(product, itemCount, btnAddToCart, btnQuantityControl, btnCardContainer);
            updateCartUI();
        }
    });
}
function updateProductUI(product, itemCount, btnAddToCart, btnQuantityControl, btnCardContainer) {
    const cartItem = cart.getItems().find(item => item.product.id === product.id);
    const quantity = cartItem ? cartItem.quantity : 0;
    itemCount.textContent = quantity.toString();
    if (quantity > 0) {
        btnAddToCart.style.display = 'none';
        btnQuantityControl.style.display = 'flex';
        btnCardContainer.style.backgroundColor = '#C73B0F';
    }
    else {
        btnQuantityControl.style.display = 'none';
        btnAddToCart.style.display = 'flex';
        btnCardContainer.style.backgroundColor = '';
    }
}
function updateCartUI() {
    const cartContainer = document.querySelector('.cart');
    if (cartContainer) {
        const cartHTML = renderCart(cart.getItems(), cart.getTotalQuantity(), cart.getTotalPrice());
        cartContainer.innerHTML = cartHTML;
        setupCartEventListeners();
    }
}
function setupCartEventListeners() {
    const cartContainer = document.querySelector('.cart');
    cartContainer.addEventListener('click', (event) => {
        const target = event.target;
        if (target.closest('.item-remove-space')) {
            const cartItem = target.closest('.cart-item');
            const productId = cartItem === null || cartItem === void 0 ? void 0 : cartItem.dataset.productId;
            if (productId) {
                cart.removeItem(productId);
                updateCartUI();
                const productContainer = document.querySelector(`.btn-card-container[data-id="${productId}"]`);
                if (productContainer) {
                    const itemCount = productContainer.querySelector('.item-count');
                    const btnAddToCart = productContainer.querySelector('.btn-add-to-cart');
                    const btnQuantityControl = productContainer.querySelector('.btn-quantity-control');
                    updateProductUI(new Product(productId, '', '', 0, ''), itemCount, btnAddToCart, btnQuantityControl, productContainer);
                }
            }
        }
    });
    const confirmOrderButton = cartContainer.querySelector('.btn-confirm-order');
    if (confirmOrderButton) {
        confirmOrderButton.addEventListener('click', openConfirmOrderModal);
    }
}
function openConfirmOrderModal() {
    const modal = document.getElementById('confirmOrderModal');
    modal.style.display = 'block';
    const closeButton = modal.querySelector('.close');
    closeButton.addEventListener('click', closeConfirmOrderModal);
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeConfirmOrderModal();
        }
    });
    const finalizeOrderButton = modal.querySelector('.btn-finalize-order');
    finalizeOrderButton.addEventListener('click', finalizeOrder);
}
function closeConfirmOrderModal() {
    const modal = document.getElementById('confirmOrderModal');
    modal.style.display = 'none';
}
function finalizeOrder() {
    console.log('Pedido finalizado!');
    closeConfirmOrderModal();
    cart.clear();
    updateCartUI();
}
document.addEventListener('DOMContentLoaded', () => {
    loadProducts().catch(error => {
        console.error('Falha ao inicializar a aplicação:', error);
    });
    updateCartUI();
});
//# sourceMappingURL=app.js.map