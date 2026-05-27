// Direccion.java
public class Direccion {
    private int id;
    private String calle;
    private String numero;
    private String depto; // Opcional
    private String ciudad;
    private String provincia;

    public Direccion(int id, String calle, String numero, String depto, String ciudad, String provincia) {
        this.id = id;
        this.calle = calle;
        this.numero = numero;
        this.depto = depto;
        this.ciudad = ciudad;
        this.provincia = provincia;
    }

    // Getters y Setters
    public int getId() { return id; }
    public String getCalle() { return calle; }
    public String getNumero() { return numero; }
    public String getDepto() { return depto; }
    public String getCiudad() { return ciudad; }
    public String getProvincia() { return provincia; }
    
    @Override
    public String toString() {
        return calle + " " + numero + (depto.isEmpty() ? "" : ", Depto: " + depto) + " (" + ciudad + ")";
    }
}
