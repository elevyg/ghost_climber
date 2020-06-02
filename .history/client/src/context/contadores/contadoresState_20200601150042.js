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
  const getContador = async (subSector, fecha = Date.now()) => {
    try {
      loadingContadores();
      const res = await axios.get('/api/v1/sectores');

      let zonas = res.data.data;

      zonas = Object.entries(groupBy(zonas, 'comuna')).map((zona) =>
        renameKeys({ 0: 'comuna', 1: 'sector' }, zona)
      );

      dispatch({ type: GET_CONTADORES, payload: zonas });
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
        contador: state.zonas,
        loading: state.loading,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        // filterContacts,
        // clearFilter,
        getContador,
        // clearContacts,
        loadingContadores,
      }}
    >
      {props.children}
    </ContadoresContext.Provider>
  );
};

export default ContadoresState;
