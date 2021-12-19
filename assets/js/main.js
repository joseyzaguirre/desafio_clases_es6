import { Cliente } from './cliente.js';
import { Impuesto } from './impuesto.js';

let iva = new Impuesto (6000000, 600000)
let juan = new Cliente ('Juan', iva);

console.log(juan.calcularImpuesto());