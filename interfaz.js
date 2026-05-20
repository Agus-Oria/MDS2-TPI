// modulo/interfaz.js
import { ClienteControlador } from './controlador.js';

const controlador = new ClienteControlador();

document.getElementById('formRegistro').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que recargue la página

    // Capturamos los datos de los inputs HTML
    const datosFormulario = {
        dni: document.getElementById('dni').value.trim(),
        nombre: document.getElementById('nombre').value.trim(),
        apellido: document.getElementById('apellido').value.trim(),
        email: document.getElementById('email').value.trim(),
        pais: document.getElementById('pais').value.trim(),
        provincia: document.getElementById('provincia').value.trim(),
        localidad: document.getElementById('localidad').value.trim(),
        calle: document.getElementById('calle').value.trim(),
        numero: document.getElementById('numero').value.trim(),
        piso: document.getElementById('piso').value.trim(),
        depto: document.getElementById('depto').value.trim()
    };

    // Llamamos al método del controlador (Lógica de Negocio)
    const resultado = controlador.registrarCliente(datosFormulario);

    // Renderizamos la respuesta en la interfaz web
    const alertBox = document.getElementById('alertBox');
    alertBox.textContent = resultado.mensaje;
    alertBox.style.display = 'block';

    if (resultado.exito) {
        alertBox.className = 'alert success';
        document.getElementById('formRegistro').reset(); // Limpia el formulario
    } else {
        alertBox.className = 'alert error';
    }
});

