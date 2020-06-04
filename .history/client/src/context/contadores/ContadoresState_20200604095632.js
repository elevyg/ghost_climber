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
  THIS_CONTADOR,
} from '../types';

const ContadoresState = (props) => {
  const initialState = {
    contadores: null,
    thisContador: null,
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

      dispatch({ type: GET_CONTADORES_SECTOR, payload: contadorSector });
    } catch (err) {
      dispatch({ type: ERROR_CONTADORES, payload: err.response });
    }
  };

  // Add contador
  const addContador = async (contador, contadorId) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      if (!contadorId) {
        console.log('Hello: ' + contador.subsector._id);
        const res = await axios.post(
          `/api/v1/${contador.subsector._id}/contadores/`,
          contador,
          config
        );
        return dispatch({ type: ADD_CONTADORES, payload: res.data.data });
      } else {
        const res = await axios.put(
          `/api/v1/contadores/${contadorId}`,
          contador,
          config
        );
        return dispatch({ type: ADD_CONTADORES, payload: res.data.data });
      }
      // dispatch({ type: ADD_CONTADORES, payload: res.data.data });
    } catch (err) {
      dispatch({ type: ERROR_CONTADORES, payload: err.response.msg });
    }
  };

  const setThisContador = (subsectorId) => {
    if (state.contadores) {
      let contador = state.contadores.filter(
        (cont) =>
          cont.subsector._id === subsectorId || cont.subsector === subsectorId
      );

      if (contador.length === 0) {
        contador = [
          {
            subsector: {
              _id: subsectorId,
            },
            fecha: Date.now(),
            contador: 0,
            dbStatus: 401,
          },
        ];
      }

      return contador[0];
    }
  };

  return (
    <ContadoresContext.Provider
      value={{
        contadores: state.contadores,
        thisContador: state.thisContador,
        contadorSector: state.contadorSector,
        loading: state.loading,
        error: state.error,
        getContadores,
        loadingContadores,
        getContadorSector,
        addContador,
        setThisContador,
      }}
    >
      {props.children}
    </ContadoresContext.Provider>
  );
};

export default ContadoresState;
