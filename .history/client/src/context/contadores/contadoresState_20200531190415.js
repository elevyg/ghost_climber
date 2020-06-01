import React, { useReducer } from 'react';
import axios from 'axios';
import groupBy from 'lodash/groupBy';
import renameKeys from '../../utils/renameKeys';

import ContadoresContext from './contadoresContext';
import contadoresReducer from './contadoresReducer';

import { GET_ZONAS, ZONAS_ERROR, LOADING_ZONAS } from '../types';

const ContadoresState = (props) => {
  const initialState = {
    zonas: null,
    loading: false,
    current: null,
    filtered: null,
    error: null,
  };

  const [state, dispatch] = useReducer(contadoresReducer, initialState);

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
        zonas: state.zonas,
        loading: state.loading,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        // filterContacts,
        // clearFilter,
        getZonas,
        // clearContacts,
        loadingZonas,
      }}
    >
      {props.children}
    </ContadoresContext.Provider>
  );
};

export default ZonasState;
