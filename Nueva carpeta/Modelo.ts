export class Modelo {
    private fechaActual: Date = new Date();
  
    determinarTipoFecha(fecha: Date): string {
      if (fecha < this.fechaActual) {
        return 'pasado';
      } else if (fecha > this.fechaActual) {
        return 'futuro';
      } else {
        return 'actual';
      }
    }
  }
  