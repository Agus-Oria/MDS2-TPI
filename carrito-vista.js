const cartItems = document.querySelector('#cart-items');
const cartCount = document.querySelector('#cart-count');
const cartSubtotal = document.querySelector('#cart-subtotal');
const shippingCost = document.querySelector('#shipping-cost');
const cartTotal = document.querySelector('#cart-total');
const checkoutButton = document.querySelector('#checkout-button');
const checkoutMessage = document.querySelector('#checkout-message');

function renderCart() {
  const items = getCartItems();
  const totals = getCartTotals();

  cartCount.textContent = totals.count;
  cartSubtotal.textContent = formatMoney(totals.subtotal);
  shippingCost.textContent = getShippingText(totals);
  cartTotal.textContent = formatMoney(totals.total);
  checkoutButton.disabled = items.length === 0;

  if (items.length === 0) {
    cartItems.innerHTML = '<div class="empty-cart">Agrega productos o kits para armar tu pedido.</div>';
    return;
  }

  cartItems.innerHTML = items.map((item) => `
    <article class="cart-item">
      <div>
        <h3>${item.name}</h3>
        <p>${formatMoney(item.price)} c/u</p>
      </div>
      <div class="quantity-control" aria-label="Cantidad de ${item.name}">
        <button type="button" data-action="decrease" data-id="${item.id}" aria-label="Restar ${item.name}">-</button>
        <span>${item.quantity}</span>
        <button type="button" data-action="increase" data-id="${item.id}" aria-label="Sumar ${item.name}">+</button>
      </div>
      <button class="remove-button" type="button" data-action="remove" data-id="${item.id}">Quitar</button>
    </article>
  `).join('');
}

function getShippingText(totals) {
  if (totals.subtotal === 0) return formatMoney(0);
  if (totals.shipping === 0) return 'Gratis';
  return formatMoney(totals.shipping);
}

const moneyFormatter = new Intl.NumberFormat('es-AR', {
  style: 'currency',
  currency: 'ARS',
  maximumFractionDigits: 0
});

function formatMoney(value) {
  return moneyFormatter.format(value);
}
