import {
  GET_CONTADORES,
  ADD_CONTADORES,
  REST_CONTADORES,
  LOADING_CONTADORES,
  ERROR_CONTADORES,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case LOADING_ZONAS:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
