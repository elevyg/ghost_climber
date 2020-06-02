import React, { useReducer } from 'react';
import axios from 'axios';
import groupBy from 'lodash/groupBy';
import renameKeys from '../../utils/renameKeys';

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
  const sumContadores =  () = {
    console.log(this.contadores);
  }

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
      }}
    >
      {props.children}
    </ContadoresContext.Provider>
  );
};

export default ContadoresState;
