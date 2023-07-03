import { Modelo } from './Modelo';
import {    Vista } from './Vista';
import { Presentador } from './Presentador';

const model = new Modelo();
const view = new Vista(new Presentador(model, view));
view.iniciar();
