const cartPanel = document.querySelector('#cart-panel');

document.querySelector('.tabs').addEventListener('click', (event) => {
  const tab = event.target.closest('.tab');
  if (!tab) return;

  document.querySelectorAll('.tab').forEach((button) => button.classList.remove('active'));
  tab.classList.add('active');
  setCatalogFilter(tab.dataset.filter);
  renderCatalog();
});

catalogGrid.addEventListener('click', (event) => {
  const button = event.target.closest('.add-button');
  if (!button) return;

  addToCart(button.dataset.id);
  checkoutMessage.textContent = '';
  renderCart();
});

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

document.querySelector('#clear-cart').addEventListener('click', () => {
  clearCart();
  checkoutMessage.textContent = '';
  renderCart();
});

checkoutButton.addEventListener('click', () => {
  const totals = getCartTotals();
  checkoutMessage.textContent = `Pedido listo: ${totals.count} producto(s) por ${formatMoney(totals.total)}.`;
});

searchInput.addEventListener('input', renderCatalog);

document.querySelector('.cart-pill').addEventListener('click', () => {
  cartPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

renderCatalog();
renderCart();
