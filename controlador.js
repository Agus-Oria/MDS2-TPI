// modulo/controlador.js
import { Cliente } from './modelo.js';

export class ClienteControlador {
    constructor() {
        // Inicializamos los clientes desde LocalStorage o array vacío si es el primero
        this.clientes = JSON.parse(localStorage.getItem('clientes')) || [];
    }

    registrarCliente(datos) {
        // Validación técnica: Campos obligatorios vacíos
        if (!datos.dni || !datos.nombre || !datos.email || !datos.calle || !datos.numero) {
            return { exito: false, mensaje: "Por favor, completa todos los campos obligatorios." };
        }

        // Validación: No duplicar clientes por DNI
        const existe = this.clientes.some(c => c.dni === datos.dni);
        if (existe) {
            return { exito: false, mensaje: "El DNI ingresado ya se encuentra registrado." };
        }

        // Instanciamos el Modelo
        const nuevoCliente = new Cliente(
            datos.dni, datos.nombre, datos.apellido, datos.email,
            datos.pais, datos.provincia, datos.localidad, datos.calle, datos.numero, datos.piso, datos.depto
        );

        // Guardamos e incrementamos el estado del software
        this.clientes.push(nuevoCliente);
        localStorage.setItem('clientes', JSON.stringify(this.clientes));

        return { exito: true, mensaje: "¡Cliente registrado con éxito!" };
    }
}

