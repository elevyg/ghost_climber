import {
  GET_CONTADORES,
  ADD_CONTADORES,
  LOADING_CONTADORES,
  ERROR_CONTADORES,
  GET_CONTADORES_SECTOR,
  UPDATE_CONTADORES,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case LOADING_CONTADORES:
      return {
        ...state,
        loading: true,
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
          cS._id.sector === action.payload.sector
            ? { ...cS, contador: cS.contador + action.payload.deltaContador }
            : cS
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
