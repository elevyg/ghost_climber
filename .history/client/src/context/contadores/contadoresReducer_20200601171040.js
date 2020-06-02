import {
  GET_CONTADORES,
  ADD_CONTADORES,
  REST_CONTADORES,
  LOADING_CONTADORES,
  ERROR_CONTADORES,
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
