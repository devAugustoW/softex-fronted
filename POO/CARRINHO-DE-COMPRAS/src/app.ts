import { Product } from './entities/product.js';
import { Cart } from './entities/cart.js';
import { renderProduct } from './views/renderProduct.js';
import { renderCart } from './views/renderCart.js';

const cart = new Cart();

async function loadProducts() {
  try {
    const response = await fetch('./data.json');
    const data = await response.json();
    const productContainer = document.querySelector('.product-container');

    if (!productContainer) {
      throw new Error("Elemento '.product-container' não encontrado no DOM");
    }

    productContainer.innerHTML = '';

    data.forEach((item: any) => {
      const product = new Product(item.id, item.name, item.category, item.price, item.image.thumbnail);
      const productHTML = renderProduct(product);
      productContainer.insertAdjacentHTML('beforeend', productHTML);
      setupProductEventListeners(product);
    });
  } catch (error) {
    console.error('Erro ao carregar os produtos:', error);
  }
}

function setupProductEventListeners(product: Product) {
  const btnCardContainer = document.querySelector(`.btn-card-container[data-id="${product.id}"]`) as HTMLElement;
  const btnAddToCart = btnCardContainer.querySelector('.btn-add-to-cart') as HTMLElement;
  const btnQuantityControl = btnCardContainer.querySelector('.btn-quantity-control') as HTMLElement;
  const btnDecrease = btnCardContainer.querySelector('.btn-decrease') as HTMLElement;
  const btnIncrease = btnCardContainer.querySelector('.btn-increase') as HTMLElement;
  const itemCount = btnCardContainer.querySelector('.item-count') as HTMLElement;

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
      } else {
        cart.removeItem(product.id);
      }
      updateProductUI(product, itemCount, btnAddToCart, btnQuantityControl, btnCardContainer);
      updateCartUI();
    }
  });
}

function updateProductUI(product: Product, itemCount: HTMLElement, btnAddToCart: HTMLElement, btnQuantityControl: HTMLElement, btnCardContainer: HTMLElement) {
  const cartItem = cart.getItems().find(item => item.product.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;
  itemCount.textContent = quantity.toString();

  if (quantity > 0) {
    btnAddToCart.style.display = 'none';
    btnQuantityControl.style.display = 'flex';
    btnCardContainer.style.backgroundColor = '#C73B0F';
  } else {
    btnQuantityControl.style.display = 'none';
    btnAddToCart.style.display = 'flex';
    btnCardContainer.style.backgroundColor = '';
  }
}

function updateCartUI() {
  const cartContainer = document.querySelector('.cart') as HTMLElement;
  if (cartContainer) {
    const cartHTML = renderCart(cart.getItems(), cart.getTotalQuantity(), cart.getTotalPrice());
    cartContainer.innerHTML = cartHTML;
    setupCartEventListeners();
  }
}

function setupCartEventListeners() {
  const cartContainer = document.querySelector('.cart') as HTMLElement;
  cartContainer.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    if (target.closest('.item-remove-space')) {
      const cartItem = target.closest('.cart-item') as HTMLElement;
      const productId = cartItem?.dataset.productId;
      if (productId) {
        cart.removeItem(productId);
        updateCartUI();
        const productContainer = document.querySelector(`.btn-card-container[data-id="${productId}"]`) as HTMLElement;
        if (productContainer) {
          const itemCount = productContainer.querySelector('.item-count') as HTMLElement;
          const btnAddToCart = productContainer.querySelector('.btn-add-to-cart') as HTMLElement;
          const btnQuantityControl = productContainer.querySelector('.btn-quantity-control') as HTMLElement;
          updateProductUI(new Product(productId, '', '', 0, ''), itemCount, btnAddToCart, btnQuantityControl, productContainer);
        }
      }
    }
  });

  const confirmOrderButton = cartContainer.querySelector('.btn-confirm-order') as HTMLButtonElement;
  if (confirmOrderButton) {
    confirmOrderButton.addEventListener('click', openConfirmOrderModal);
  }
}

function openConfirmOrderModal() {
  const modal = document.getElementById('confirmOrderModal') as HTMLElement;
  modal.style.display = 'block';

  const closeButton = modal.querySelector('.close') as HTMLElement;
  closeButton.addEventListener('click', closeConfirmOrderModal);

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeConfirmOrderModal();
    }
  });

  const finalizeOrderButton = modal.querySelector('.btn-finalize-order') as HTMLButtonElement;
  finalizeOrderButton.addEventListener('click', finalizeOrder);
}

function closeConfirmOrderModal() {
  const modal = document.getElementById('confirmOrderModal') as HTMLElement;
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