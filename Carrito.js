const cart = new Map();
const FREE_SHIPPING_MINIMUM = 12000;
const SHIPPING_PRICE = 1500;

function addToCart(id) {
  const product = catalog.find((item) => item.id === id);
  const current = cart.get(id);

  cart.set(id, {
    ...product,
    quantity: current ? current.quantity + 1 : 1
  });
}

function updateQuantity(id, change) {
  const item = cart.get(id);
  if (!item) return;

  const nextQuantity = item.quantity + change;
  if (nextQuantity <= 0) {
    cart.delete(id);
  } else {
    cart.set(id, { ...item, quantity: nextQuantity });
  }
}

function removeFromCart(id) {
  cart.delete(id);
}

function clearCart() {
  cart.clear();
}

function getCartItems() {
  return [...cart.values()];
}

function getCartTotals() {
  const items = getCartItems();
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal === 0 || subtotal >= FREE_SHIPPING_MINIMUM ? 0 : SHIPPING_PRICE;

  return {
    count: items.reduce((sum, item) => sum + item.quantity, 0),
    subtotal,
    shipping,
    total: subtotal + shipping
  };
}
