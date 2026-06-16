const cartPanel = document.querySelector('#cart-panel');
const clearCartButton = document.querySelector('#clear-cart');

const tabsContainer = document.querySelector('.tabs');
if (tabsContainer) {
  tabsContainer.addEventListener('click', (event) => {
    const tab = event.target.closest('.tab');
    if (!tab) return;

    document.querySelectorAll('.tab').forEach((button) => button.classList.remove('active'));
    tab.classList.add('active');
    setCatalogFilter(tab.dataset.filter);
    renderCatalog();
  });
}

if (typeof catalogGrid !== 'undefined' && catalogGrid) {
  catalogGrid.addEventListener('click', (event) => {
    const button = event.target.closest('.add-button');
    if (!button) return;

    addToCart(button.dataset.id);
    if (typeof checkoutMessage !== 'undefined' && checkoutMessage) {
      checkoutMessage.textContent = '';
    }
    renderCart();
  });
}

if (typeof cartItems !== 'undefined' && cartItems) {
  cartItems.addEventListener('click', (event) => {
    const button = event.target.closest('button');
    if (!button) return;

    const id = button.dataset.id;
    const action = button.dataset.action;

    if (action === 'increase') updateQuantity(id, 1);
    if (action === 'decrease') updateQuantity(id, -1);
    if (action === 'remove') removeFromCart(id);

    renderCart();
  });
}

if (clearCartButton) {
  clearCartButton.addEventListener('click', () => {
    clearCart();
    if (typeof checkoutMessage !== 'undefined' && checkoutMessage) {
      checkoutMessage.textContent = '';
    }
    renderCart();
  });
}

if (typeof checkoutButton !== 'undefined' && checkoutButton) {
  checkoutButton.addEventListener('click', () => {
    const totals = getCartTotals();
    if (typeof checkoutMessage !== 'undefined' && checkoutMessage) {
      checkoutMessage.textContent = `Pedido listo: ${totals.count} producto(s) por ${formatMoney(totals.total)}.`;
    }
  });
}

if (typeof searchInput !== 'undefined' && searchInput) {
  searchInput.addEventListener('input', renderCatalog);
}

const cartPill = document.querySelector('.cart-pill');
if (cartPill && cartPanel) {
  cartPill.addEventListener('click', () => {
    cartPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

if (typeof renderCatalog === 'function' && typeof renderCart === 'function') {
  renderCatalog();
  renderCart();
} else {
  console.error("Las funciones renderCatalog o renderCart no están disponibles. Revisá el orden de tus scripts en el HTML.");
}
