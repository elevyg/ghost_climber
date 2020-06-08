import {
  GET_CONTADORES,
  GET_ZONAS,
  GET_CONTADORES_SECTOR,
  ADD_CONTADORES,
  LOADING_CONTADORES,
  ERROR_CONTADORES,
  UPDATE_CONTADORES,
  FILTRAR_CONTADORES,
  CLEAR_FILTER,
  SET_FECHA,
  ADD_CONTADOR_SECTOR,
  LOADING_ZONAS,
} from '../types';

import { isSame } from 'moment';

export default (state, action) => {
  switch (action.type) {
    case GET_ZONAS:
      return { ...state, loadingZonas: false, zonas: action.payload };
    case LOADING_CONTADORES:
      return {
        ...state,
        loading: true,
      };
    case LOADING_ZONAS:
      return {
        ...state,
        loadingZonas: true,
      };
    case SET_FECHA:
      return {
        ...state,
        thisFecha: action.payload,
      };
    case GET_CONTADORES:
      return {
        ...state,
        contadores: action.payload,
        loading: false,
      };
    case GET_CONTADORES_SECTOR:
      return {
        ...state,
        contadorSector: action.payload,
      };

    case UPDATE_CONTADORES:
      return {
        ...state,
        contadores: state.contadores.map((contador) =>
          contador._id === action.payload._id ? action.payload : contador
        ),
        contadorSector: state.contadorSector.map((cS) =>
          cS._id.sector === action.payload.sectorId &&
          cS.fecha.isSame(action.payload.fecha, 'day')
            ? { ...cS, contador: cS.contador + action.payload.deltaContador }
            : cS
        ),
        loading: false,
      };
    case ADD_CONTADORES:
      return {
        ...state,
        contadores: [...state.contadores, action.payload],
        contadorSector: state.contadorSector.map((cS) =>
          cS._id.sector === action.payload.sectorId &&
          cS.fecha.isSame(action.payload.fecha, 'day')
            ? { ...cS, contador: cS.contador + action.payload.deltaContador }
            : cS
        ),
      };
    case ADD_CONTADOR_SECTOR:
      return {
        ...state,
        contadorSector: [...state.contadorSector, action.payload],
      };
    case FILTRAR_CONTADORES:
      return {
        ...state,
        contadoresDay: state.contadores.filter((cont) =>
          cont.fecha.isSame(action.payload, 'day')
        ),
        contadorSectorDay: state.contadorSector.filter((cont) =>
          cont.fecha.isSame(action.payload, 'day')
        ),
        loading: false,
      };
    case CLEAR_FILTER:
      return {
        ...state,
        contadoresDay: null,
        contadorSectorDay: null,
      };
    case ERROR_CONTADORES:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
