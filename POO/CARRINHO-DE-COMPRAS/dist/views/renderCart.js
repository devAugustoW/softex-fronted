export function renderCartItem(item) {
    return `
    <div class="cart-item" data-product-id="${item.product.id}">
      <span class="item-name">${item.product.name}</span>
      <div class="item-content">
        <span class="item-amount">${item.quantity}x</span>
        <span class="item-price">R$ ${item.product.price.toFixed(2)}</span>
        <span class="item-total">R$ ${item.totalPrice.toFixed(2)}</span>
      </div>
      <i class="item-remove-space">
        <svg class="img-remote" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/></svg>
      </i>
    </div>
  `;
}
export function renderCart(items, totalQuantity, totalPrice) {
    return items.length === 0 ? renderEmptyCart() : renderFilledCart(items, totalQuantity, totalPrice);
}
function renderEmptyCart() {
    return `
    <h2 class="cart-title">Your Cart (0)</h2>
    <div class="empty-cart-message" style="text-align: center;">
      <img src="../../assets/images/illustration-empty-cart.svg" alt="Empty Cart" class="empty-cart-image">
      <p>Your added items will appear here</p>
    </div>
  `;
}
function renderFilledCart(items, totalQuantity, totalPrice) {
    const itemsHtml = items.map(renderCartItem).join('');
    return `
    <h2 class="cart-title">Your Cart (${totalQuantity})</h2>
    <div class="cart-items-container">
      ${itemsHtml}
    </div>
    <div class="cart-order-total">
      <span class="order-name">Order Total</span>
      <span class="order-total">R$ ${totalPrice.toFixed(2)}</span>
    </div>
    <div class="delivery-warning">
      <div>
        <img src="../../assets/images/icon-carbon-neutral.svg" alt="Delivery Icon" class="delivery-icon">
      </div>
      <p class="delivery-text">This is a <span class="delivery-strong">carbon-neutral</span> delivery</p>
    </div>
    <button class="btn-confirm-order">Confirm Order</button>
    ${renderOrderModal(itemsHtml, totalPrice)}
  `;
}
function renderOrderModal(itemsHtml, totalPrice) {
    return `
    <div id="confirmOrderModal" class="modal" style="display: none;">
      <div class="modal-content">
        <div class="modal-header">
          <svg class="check-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.5 18l-5-5 1.414-1.414L10.5 14.172l7.086-7.086L19 8.5l-8.5 8.5z" fill="#4CAF50"/></svg>
          <h2>Order Confirmed</h2>
          <p>We hope you enjoy your food!</p>
        </div>
        <div class="modal-cart-items">
          ${itemsHtml}
        </div>
        <div class="modal-total">
          <span>Order Total:</span>
          <span>R$ ${totalPrice.toFixed(2)}</span>
        </div>
        <button class="btn-finalize-order">Start New Order</button>
      </div>
    </div>
  `;
}
//# sourceMappingURL=renderCart.js.map