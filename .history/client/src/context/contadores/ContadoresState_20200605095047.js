import React, { useReducer } from 'react';
import axios from 'axios';

import ContadoresContext from './contadoresContext';
import contadoresReducer from './contadoresReducer';

import {
  GET_CONTADORES,
  ADD_CONTADORES,
  LOADING_CONTADORES,
  ERROR_CONTADORES,
  GET_CONTADORES_SECTOR,
  UPDATE_CONTADORES,
  FILTRAR_CONTADORES,
  SET_FECHA,
} from '../types';

const ContadoresState = (props) => {
  const initialState = {
    contadores: null,
    contadoresDay: null,
    contadorSector: null,
    contadorSectorDay: null,
    thisFecha: new Date(),
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

      // contadorSector.fecha = new Date(
      //   contadorSector._id.year,
      //   contadorSector._id.month,
      //   contadorSector._id.day
      // );

      dispatch({ type: GET_CONTADORES_SECTOR, payload: contadorSector });
    } catch (err) {
      dispatch({ type: ERROR_CONTADORES, payload: err.response });
    }
  };

  // Add contador
  const addContador = async (contador, contadorId, sectorId) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (!contadorId) {
      try {
        const res = await axios.post(
          `/api/v1/subsectores/${contador.subsector._id}/contadores/`,
          contador,
          config
        );
        res.data.data.sectorId = sectorId;
        res.data.data.deltaContador = contador.contador;
        dispatch({ type: ADD_CONTADORES, payload: res.data.data });
      } catch (err) {
        dispatch({ type: ERROR_CONTADORES, payload: err.response.msg });
      }
    } else {
      try {
        const res = await axios.put(
          `/api/v1/contadores/${contadorId}`,
          contador,
          config
        );
        res.data.data.sectorId = sectorId;
        res.data.data.deltaContador = contador.contador;
        dispatch({ type: UPDATE_CONTADORES, payload: res.data.data });
      } catch (err) {
        dispatch({ type: ERROR_CONTADORES, payload: err.response.msg });
      }
    }
  };

  // Filtrar contador para subsector
  const setThisContador = (subsectorId) => {
    if (state.contadoresDay) {
      let contador = state.contadoresDay.filter(
        (cont) =>
          cont.subsector._id === subsectorId || cont.subsector === subsectorId
      );

      if (contador.length === 0) {
        contador = [
          {
            subsector: {
              _id: subsectorId,
            },
            fecha: state.thisFecha,
            contador: 0,
            dbStatus: 401,
          },
        ];
      }

      return contador[0];
    }
  };

  // Fijar fecha
  const setFecha = (fecha) => {
    dispatch({ type: SET_FECHA, payload: fecha });
  };

  // Filtrar contadores por día seleccionado
  const filtrarContadores = (fecha) => {
    dispatch({ type: FILTRAR_CONTADORES, payload: fecha });
  };

  return (
    <ContadoresContext.Provider
      value={{
        contadores: state.contadores,
        contadoresDay: state.contadoresDay,
        contadorSector: state.contadorSector,
        contadorSectorDay: state.contadorSectorDay,
        thisFecha: state.thisFecha,
        loading: state.loading,
        error: state.error,
        getContadores,
        loadingContadores,
        getContadorSector,
        addContador,
        setThisContador,
        filtrarContadores,
        setFecha,
      }}
    >
      {props.children}
    </ContadoresContext.Provider>
  );
};

export default ContadoresState;
