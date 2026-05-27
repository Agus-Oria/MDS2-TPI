import java.util.List;

public class DireccionController {
    private Cliente clienteLogueado;

    public DireccionController(Cliente clienteLogueado) {
        this.clienteLogueado = clienteLogueado;
    }

    public List<Direccion> obtenerDireccionesCliente() {
        return clienteLogueado.getDirecciones();
    }

    public void registrarDireccion(int id, String calle, String numero, String depto, String ciudad, String provincia) {
       
        if (calle.isEmpty() || numero.isEmpty() || ciudad.isEmpty() || provincia.isEmpty()) {
            throw new IllegalArgumentException("Los campos obligatorios no pueden estar vacíos.");
        }
        
        Direccion nuevaDireccion = new Direccion(id, calle, numero, depto, ciudad, provincia);
        clienteLogueado.agregarDireccion(nuevaDireccion);
    }

    public void borrarDireccion(int idDireccion) {
        clienteLogueado.eliminarDireccion(idDireccion);
    }
}
