import {
  GET_CONTADORES,
  ADD_CONTADORES,
  LOADING_CONTADORES,
  ERROR_CONTADORES,
  GET_CONTADORES_SECTOR,
  UPDATE_CONTADORES,
  FILTRAR_CONTADORES,
  SET_FECHA,
} from '../types';

import sameDay from '../../utils/sameDay';

export default (state, action) => {
  switch (action.type) {
    case LOADING_CONTADORES:
      return {
        ...state,
        loading: true,
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
        loading: false,
      };
    case UPDATE_CONTADORES:
      return {
        ...state,
        contadores: state.contadores.map((contador) =>
          contador._id === action.payload._id ? action.payload : contador
        ),
        contadorSector: state.contadorSector.map((cS) =>
          cS._id.sector === action.payload.sectorId
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
          cS._id.sector === action.payload.sectorId
            ? { ...cS, contador: cS.contador + action.payload.deltaContador }
            : cS
        ),
      };
    case FILTRAR_CONTADORES:
      console.log(action.payload.getDate());
      console.log(state.contadorSector.map((c) => c.fecha));
      console.log(
        state.contadorSector.map((c) => sameDay(c.fecha, action.payload))
      );
      console.log(
        state.contadorSector.filter((cont) =>
          sameDay(cont.fecha, action.payload)
        )
      );
      return {
        ...state,
        contadoresDay: state.contadores.filter((cont) =>
          sameDay(cont.fecha, action.payload)
        ),
        contadorSectorDay: state.contadorSector.filter((cont) =>
          sameDay(cont.fecha, action.payload)
        ),
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
