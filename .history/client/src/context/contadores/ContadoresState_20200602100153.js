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

  // Get Zonas
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

  // Calcular contadores por sector
  const sumContadores = (subsectoresId) => {
    console.log('Inside context API ' + subsectoresId.length);
    // console.log(subsectoresId);
    const { contadores } = state;
    let c;
    if (contadores) {
      console.log('Contadores: ' + contadores.length);
      console.log(contadores);
      console.log(subsectoresId);
      const contSubId = contadores.map((c) => c.subsector._id);
      let contFiltrados = [];
      let i;
      for (i in contSubId) {
        let j;
        for (j in subsectoresId) {
          if (i === j) {
            contFiltrados.push(contadores.filter((c) => c.subsector._d === j));
          }
        }
      }
      c = contadores.filter((c) => c.subsector._id.includes(subsectoresId));

      console.log('Filtrados: ' + c);
      // .reduce((a, b) => a + (b.contador || 0), 0);
    } else {
      c = 0;
    }
    return c;
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
        sumContadores,
      }}
    >
      {props.children}
    </ContadoresContext.Provider>
  );
};

export default ContadoresState;
