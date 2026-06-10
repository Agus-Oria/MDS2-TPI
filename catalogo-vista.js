let currentFilter = 'products';

const catalogGrid = document.querySelector('#catalog-grid');
const searchInput = document.querySelector('#search-input');

function setCatalogFilter(filter) {
  currentFilter = filter;
}

function getVisibleCatalogItems() {
  const term = searchInput.value.trim().toLowerCase();

  return catalog.filter((item) => {
    const matchesFilter = currentFilter === 'all' || item.type === currentFilter;
    const matchesSearch = item.name.toLowerCase().includes(term) || item.description.toLowerCase().includes(term);
    return matchesFilter && matchesSearch;
  });
}

function renderCatalog() {
  const visibleItems = getVisibleCatalogItems();

  if (visibleItems.length === 0) {
    catalogGrid.innerHTML = '<p class="empty-cart">No encontramos resultados para esa busqueda.</p>';
    return;
  }

  catalogGrid.innerHTML = visibleItems.map((item, index) => `
    <article class="product-card">
      <div class="product-image ${getColorClass(index)}" style="background-image: url('${item.image}')">
        <span class="badge">${item.tag}</span>
      </div>
      <div class="product-body">
        <h3>${item.name}</h3>
        <p class="product-description">${item.description}</p>
        <div class="product-footer">
          <span class="price">${formatMoney(item.price)}</span>
          <button class="add-button" type="button" data-id="${item.id}">Agregar</button>
        </div>
      </div>
    </article>
  `).join('');
}

function getColorClass(index) {
  if (index % 3 === 0) return 'tone-yellow';
  if (index % 3 === 1) return 'tone-coral';
  return 'tone-blue';
}
