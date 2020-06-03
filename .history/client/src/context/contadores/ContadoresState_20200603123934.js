import React, { useReducer } from 'react';
import axios from 'axios';

import ContadoresContext from './contadoresContext';
import contadoresReducer from './contadoresReducer';

import {
  GET_CONTADORES,
  ADD_CONTADORES,
  REST_CONTADORES,
  LOADING_CONTADORES,
  ERROR_CONTADORES,
  GET_CONTADORES_SECTOR,
} from '../types';

const ContadoresState = (props) => {
  const initialState = {
    contadores: null,
    contadorSector: null,
    loading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(contadoresReducer, initialState);

  // Loading
  const loadingContadores = () => {
    const loading = true;
    dispatch({ type: LOADING_CONTADORES, payload: loading });
  };

  // Obtener contadores por subsector
  const getContadores = async () => {
    try {
      loadingContadores();
      const res = await axios.get(`/api/v1/contadores`);

      let contadores = res.data.data;

      dispatch({ type: GET_CONTADORES, payload: contadores });
    } catch (err) {
      dispatch({ type: ERROR_CONTADORES, payload: err.response });
    }
  };

  // Obtener contadores por sector
  const getContadorSector = async (zonas) => {
    try {
      loadingContadores();

      const sectores = zonas.map((z) => z.sector);
      const sectoresId = [];

      for (let i = 0; i < sectores.length; i++) {
        sectores[i].map((s) => sectoresId.push(s._id));
      }

      const res = await Promise.all(
        sectoresId.map((id) => axios.get(`/api/v1/sectores/${id}/contadores`))
      );

      const contadorSector = res.map((p) => p.data.data);
      console.log(contadorSector);

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
    <ContadoresContext.Provider
      value={{
        contadores: state.contadores,
        contadorSector: state.contadorSector,
        loading: state.loading,
        error: state.error,
        getContadores,
        loadingContadores,
        getContadorSector,
      }}
    >
      {props.children}
    </ContadoresContext.Provider>
  );
};

export default ContadoresState;
