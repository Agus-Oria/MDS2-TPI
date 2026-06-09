class Carrito {
    constructor() {
        this.items = []; // Estructura interna: { producto, cantidad }
    }

    agregarProducto(producto, cantidad = 1) {
        if (!producto) {
            throw new Error("No se puede agregar un producto nulo o inexistente.");
        }
        if (cantidad <= 0) {
            throw new Error("La cantidad a agregar debe ser mayor a cero.");
        }

        const itemExistente = this.items.find(item => item.producto.id === producto.id);

        if (itemExistente) {
            itemExistente.cantidad += cantidad;
        } else {
            this.items.push({ producto, cantidad });
        }
    }

    obtenerItems() {
        return this.items;
    }

    calcularTotal() {
        return this.items.reduce((total, item) => total + (item.producto.precio * item.cantidad), 0);
    }
}

module.exports = Carrito;
