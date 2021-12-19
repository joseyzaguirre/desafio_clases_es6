export class Impuesto {
    constructor(monto_bruto, deducciones) {
        this.monto_bruto = monto_bruto;
        this.deducciones = deducciones;
    };
    getMontoBruto() {
        return this.monto_bruto;
    };
    setMontoBruto(monto) {
        return this.monto_bruto = monto;
    };
    getDeducciones() {
        return this.deducciones
    }; 
    setDeducciones(x) {
        return this.deducciones = x;
    }; 
};