import { Modelo } from './Modelo';
import { Vista } from './Vista';

export class Presentador {
  private model: Modelo;
  private view: Vista;

  constructor(model: Modelo, view: Vista) {
    this.model = model;
    this.view = view;
  }

  iniciar() {
    const fecha = this.view.obtenerFecha();
    const tipoFecha = this.model.determinarTipoFecha(fecha);
    this.view.mostrarResultado(tipoFecha);
  }
}
