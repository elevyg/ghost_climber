import React, { useReducer } from 'react';
import axios from 'axios';
import groupBy from 'lodash/groupBy';
import renameKeys from '../../utils/renameKeys';

import ZonasContext from './zonasContext';
import zonasReducer from './zonasReducer';

import {
  GET_ZONAS,
  ZONAS_ERROR,
  LOADING_ZONAS,
  GET_CONTADORES_SECTOR,
} from '../types';

const ZonasState = (props) => {
  const initialState = {
    zonas: null,
    contadorSector: null,
    loading: false,
    current: null,
    filtered: null,
    error: null,
  };

  const [state, dispatch] = useReducer(zonasReducer, initialState);

  // Loading
  const loadingZonas = () => {
    const loading = true;
    dispatch({ type: LOADING_ZONAS, payload: loading });
  };

  // Get Zonas
  const getZonas = async () => {
    try {
      loadingZonas();
      const res = await axios.get('/api/v1/sectores');

      let zonas = res.data.data;

      zonas = Object.entries(groupBy(zonas, 'comuna')).map((zona) =>
        renameKeys({ 0: 'comuna', 1: 'sector' }, zona)
      );

      dispatch({ type: GET_ZONAS, payload: zonas });
    } catch (err) {
      dispatch({ type: ZONAS_ERROR, payload: err.response });
    }
  };

  // Obtener contadores por sector
  const getContadorSector = async () => {
    try {
      loadingZonas();
      let sectores;
      if (state.zonas) {
        sectores = state.zonas.map((z) => z.sector);
      }
      const sectoresId = [];

      for (let i = 0; i < sectores.length; i++) {
        sectores[i].map((s) => sectoresId.push(s._id));
      }

      const res = await Promise.all(
        sectoresId.map((id) => axios.get(`/api/v1/sectores/${id}/contadores`))
      );

      const contadorSector = res.map((p) => p.data.data).flat(2);

      dispatch({ type: GET_CONTADORES_SECTOR, payload: contadorSector });
    } catch (err) {
      dispatch({ type: ERROR_CONTADORES, payload: err.response });
    }
  };

  // // Filter Contacts
  // const filterContacts = (text) => {
  //   dispatch({ type: FILTER_CONTACTS, payload: text });
  // };

  // // Clear Filter
  // const clearFilter = () => {
  //   dispatch({ type: CLEAR_FILTER });
  // };

  // // Clear Contacts

  // const clearContacts = () => dispatch({ type: CLEAR_CONTACTS });

  return (
    <ZonasContext.Provider
      value={{
        zonas: state.zonas,
        loading: state.loading,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        // filterContacts,
        // clearFilter,
        getZonas,
        getContadorSector,
        // clearContacts,
        loadingZonas,
      }}
    >
      {props.children}
    </ZonasContext.Provider>
  );
};

export default ZonasState;
