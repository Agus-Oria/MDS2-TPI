// modulo/modelo.js
export class Cliente {
    constructor(dni, nombre, apellido, email, pais, provincia, localidad, calle, numero, piso, depto) {
        this.dni = dni;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        // Dirección de envío predefinida (Requisito explícito del TPI)
        this.direccion = {
            pais: pais,
            provincia: provincia,
            localidad: localidad,
            calle: calle,
            numero: numero,
            piso: piso || null, // Opcional
            depto: depto || null  // Opcional
        };
    }
}
