class Producto {
    constructor(id, nombre, precio, descripcion) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
    }
}

const catalogoProductos = [
    new Producto(1, "Pelota de Rugby N°5", 25000, "Pelota oficial de entrenamiento, costuras reforzadas."),
    new Producto(2, "Camiseta Deportiva", 18000, "Camiseta técnica ideal para alto rendimiento."),
    new Producto(3, "Protector Bucal", 4500, "Protector de silicona adaptabilidad termo-ajustable."),
    new Producto(4, "Medias de Compresión", 3500, "Medias altas reforzadas para competición.")
];

module.exports = { Producto, catalogoProductos };
