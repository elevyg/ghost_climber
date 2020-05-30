import { GET_ZONAS, ZONAS_ERROR, LOADING_ZONAS } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_ZONAS:
      return { ...state, loading: false, zonas: action.payload };
    case LOADING_ZONAS:
      return {
        ...state,
        loading: true,
      };
    case ZONAS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
