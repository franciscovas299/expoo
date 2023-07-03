import { Presentador } from './Presentador';

export class Vista {
  private presenter: Presentador;

  constructor(presenter: Presentador) {
    this.presenter = presenter;
  }

  obtenerFecha(): Date {
    const fechaStr = prompt('Introduce una fecha (formato: DD/MM/YYYY)');
    if (fechaStr === null) {
      throw new Error('La entrada de fecha fue cancelada por el usuario.');
    }
    const partesFecha = fechaStr.split('/');
    if (partesFecha.length !== 3) {
      throw new Error('Formato de fecha incorrecto. Debe ser DD/MM/YYYY.');
    }
    const fecha = new Date(
      parseInt(partesFecha[2]),
      parseInt(partesFecha[1]) - 1,
      parseInt(partesFecha[0])
    );
    return fecha;
  }

  mostrarResultado(tipoFecha: string) {
    console.log(`La fecha introducida es ${tipoFecha}`);
  }
}






