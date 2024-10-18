export function renderProduct(product) {
    return `
  <div class="card">
    <div class="card-top">
      <div class="img-card-space">
        <img class="img-card" src="${product.imageUrl}" alt="${product.name}">
      </div>

      <div class="btn-card-container" data-id="${product.id}">
        <button class="btn-add-to-cart">
          <i class="btn-icon-card">
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20"><g fill="#C73B0F" clip-path="url(#a)"><path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z"/><path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M.333 0h20v20h-20z"/></clipPath></defs></svg>
          </i>
          <span class="btn-text-card">Adicionar ao Carrinho</span>
        </button>

        <div class="btn-quantity-control" style="display: none;">
          <button class="btn-decrease">-</button>
          <span class="item-count">0</span>
          <button class="btn-increase">+</button>
        </div>
      </div>
    </div>
    
    <div class="card-bottom">
      <span class="card-category">${product.category}</span>
      <span class="card-name">${product.name}</span>
      <span class="card-price">R$ ${product.price.toFixed(2)}</span>
    </div>
  </div>
  `;
}
//# sourceMappingURL=renderProduct.js.map