import { Cart } from "./cart";
import { updateCartUI, resetProductUI, loadProducts } from "../app"; // Importe as funções necessárias

export function openModal(modalId: string, cart: Cart): void {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'block';
    setupModalEventListeners(modal, cart);
  }
}

function setupModalEventListeners(modal: HTMLElement, cart: Cart): void {
  const closeButton = modal.querySelector('.close') as HTMLElement;
  closeButton?.addEventListener('click', () => closeModal(modal.id));

  const startNewOrderButton = modal.querySelector('.btn-finalize-order') as HTMLElement;
  startNewOrderButton?.addEventListener('click', async () => {
    console.log('Start New Order clicked'); // Log para verificar se o evento é disparado
    cart.clear(); 
    console.log('Cart cleared:', cart.getItems()); // Log para verificar se o carrinho foi esvaziado
    await loadProducts(); // Recarregar produtos
    updateCartUI(); 
    resetProductUI(); 
    closeModal(modal.id); 
  });

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal(modal.id);
    }
  });
}

function closeModal(modalId: string): void {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'none';
  }
}