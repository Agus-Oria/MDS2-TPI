import java.util.List;

public class VistaGestionDirecciones {
    private DireccionController controller;

    public VistaGestionDirecciones(DireccionController controller) {
        this.controller = controller;
    }

    public void mostrarDirecciones() {
        System.out.println("--- MIS DIRECCIONES DE ENVÍO ---");
        List<Direccion> lista = controller.obtenerDireccionesCliente();
        
        if (lista.isEmpty()) {
            System.out.println("No tenés direcciones registradas.");
        } else {
            for (Direccion d : lista) {
                System.out.println("[" + d.getId() + "] - " + d.toString());
            }
        }
        System.out.println("--------------------------------");
    }

    public void botonAgregarClick(int id, String calle, String numero, String depto, String ciudad, String provincia) {
        try {
            controller.registrarDireccion(id, calle, numero, depto, ciudad, provincia);
            System.out.println("¡Dirección agregada con éxito!");
        } catch (IllegalArgumentException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }

    public void botonEliminarClick(int idDireccion) {
        controller.borrarDireccion(idDireccion);
        System.out.println("Dirección eliminada correctamente.");
    }
}
