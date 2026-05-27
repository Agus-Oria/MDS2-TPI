
import java.util.ArrayList;
import java.util.List;

public class Cliente {
    private int id;
    private String nombre;
    private List<Direccion> direcciones; // Relación 1 a muchos

    public Cliente(int id, String nombre) {
        this.id = id;
        this.nombre = nombre;
        this.direcciones = new ArrayList<>();
    }

    public List<Direccion> getDirecciones() { return direcciones; }
    
    public void agregarDireccion(Direccion d) { this.direcciones.add(d); }
    
    public void eliminarDireccion(int idDireccion) {
        this.direcciones.removeIf(d -> d.getId() == idDireccion);
    }
}
