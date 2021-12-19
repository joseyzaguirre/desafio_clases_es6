export class Cliente {
    constructor(nombre, impuesto) {
        this.nombre = nombre;
        this.impuesto = impuesto;
    };
    getNombre() {
        return this.nombre;
    };
    setNombre(nombre) {
        return this.nombre = nombre;
    };
    calcularImpuesto() {
        return (this.impuesto.getMontoBruto() - this.impuesto.getDeducciones()) * 21/100;
    };
};
