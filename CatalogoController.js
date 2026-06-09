const { catalogoProductos } = require('./Producto');

class CatalogoController {
    obtenerCatalogo() {
        return catalogoProductos;
    }

    mostrarCatalogoPorConsola() {
        console.log("\n--- 🛒 CATÁLOGO DE PRODUCTOS DISPONIBLES ---");
        catalogoProductos.forEach(prod => {
            console.log(`[ID: ${prod.id}] ${prod.nombre} - $${prod.precio}`);
            console.log(`   Descripción: ${prod.descripcion}`);
        });
    }
}

module.exports = CatalogoController;
