import { v4 as uuidv4 } from 'uuid';
import { Product } from './entities/product.js';
import { Cart } from './entities/cart.js';
import { renderProduct } from './views/renderProduct.js';
import { renderCart } from './views/renderCart.js';
import { openModal } from './entities/modal.js';

const cart = new Cart();
let products: Product[] = []; // Armazena os produtos carregados

export async function loadProducts() {
  try {
    const response = await fetch('./data.json');
    const data = await response.json();
    const productContainer = document.querySelector('.product-container');

    if (!productContainer) {
      throw new Error("Elemento '.product-container' não encontrado no DOM");
    }

    productContainer.innerHTML = '';

    data.forEach((item: any) => {
      const productId = uuidv4(); // Gere um ID único para cada produto
      const product = new Product(productId, item.name, item.category, item.price, item.image.desktop); // Use a imagem para desktop
      products.push(product); // Armazena o produto na lista
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
  if (!btnCardContainer) {
    console.warn(`Elemento não encontrado para o produto com ID: ${product.id}`);
    return;
  }
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

export function updateCartUI() {
  const cartContainer = document.querySelector('.cart') as HTMLElement;
  if (cartContainer) {
    const cartHTML = renderCart(cart.getItems(), cart.getTotalQuantity(), cart.getTotalPrice());
    cartContainer.innerHTML = cartHTML;
    setupCartEventListeners();
  }
}

export function resetProductUI() {
  products.forEach(product => {
    product.resetQuantity(); // Redefine a quantidade interna do produto
    const btnCardContainer = document.querySelector(`.btn-card-container[data-id="${product.id}"]`) as HTMLElement;
    if (btnCardContainer) {
      const itemCount = btnCardContainer.querySelector('.item-count') as HTMLElement;
      const btnAddToCart = btnCardContainer.querySelector('.btn-add-to-cart') as HTMLElement;
      const btnQuantityControl = btnCardContainer.querySelector('.btn-quantity-control') as HTMLElement;
      updateProductUI(product, itemCount, btnAddToCart, btnQuantityControl, btnCardContainer);
    } else {
      console.warn(`Elemento não encontrado para o produto com ID: ${product.id}`);
    }
  });
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
    confirmOrderButton.addEventListener('click', () => openModal('confirmOrderModal', cart));
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadProducts().catch(error => {
    console.error('Falha ao inicializar a aplicação:', error);
  });
  updateCartUI();
});