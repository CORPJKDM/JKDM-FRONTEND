export default class Cotizacion {
  constructor(id, cliente, descripcion, fecha, estado, monto) {
    this.id = id;
    this.cliente = cliente;
    this.descripcion = descripcion;
    this.fecha = fecha;
    this.estado = estado;
    this.monto = monto;
  }
}
