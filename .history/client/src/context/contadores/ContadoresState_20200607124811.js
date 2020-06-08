import React, { useReducer } from 'react';
import axios from 'axios';

import ContadoresContext from './contadoresContext';
import contadoresReducer from './contadoresReducer';

import groupBy from 'lodash/groupBy';
import renameKeys from '../../utils/renameKeys';

import {
  GET_CONTADORES,
  GET_ZONAS,
  ADD_CONTADORES,
  LOADING_CONTADORES,
  LOADING_ZONAS,
  ERROR_CONTADORES,
  GET_CONTADORES_SECTOR,
  UPDATE_CONTADORES,
  FILTRAR_CONTADORES,
  CLEAR_FILTER,
  SET_FECHA,
} from '../types';
import sameDay from '../../utils/sameDay';

const ContadoresState = (props) => {
  const initialState = {
    zonas: null,
    contadores: null,
    contadoresDay: null,
    contadorSector: null,
    contadorSectorDay: null,
    thisFecha: new Date(),
    loading: false,
    loadingZonas: false,
    error: null,
  };

  const [state, dispatch] = useReducer(contadoresReducer, initialState);

  // Loading contadores
  const loadingContadores = () => {
    dispatch({ type: LOADING_CONTADORES });
  };
  // Loading
  const setLoadingZonas = () => {
    dispatch({ type: LOADING_ZONAS });
  };

  // Get Zonas
  const getZonas = async () => {
    setLoadingZonas();
    try {
      const res = await axios.get('/api/v1/sectores');

      let zonas = res.data.data;

      zonas = Object.entries(groupBy(zonas, 'comuna')).map((zona) =>
        renameKeys({ 0: 'comuna', 1: 'sector' }, zona)
      );

      dispatch({ type: GET_ZONAS, payload: zonas });
    } catch (err) {
      dispatch({ type: ERROR_CONTADORES, payload: err.response });
    }
  };

  // Obtener contadores por subsector
  const getContadores = async () => {
    loadingContadores();
    try {
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
      const sectores = zonas.map((z) => z.sector);

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
    if (state.contadores) {
      let contador = state.contadores.filter(
        (cont) =>
          (cont.subsector._id === subsectorId ||
            cont.subsector === subsectorId) &&
          sameDay(cont.fecha, state.thisFecha)
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

  const setThisContadorSector = (sectorId) => {
    if (state.contadorSector) {
      console.log('Hello');
      const cont = state.contadorSector.filter((cS) => 
         cS._id.sector === sectorId && sameDay(cS.fecha, state.thisFecha);
      );

      if (cont.length > 0) {
        const { contador: res } = cont.find(({ contador }) => contador);
        return res;
      } else {
        return 0;
      }
    }
  };

  // Fijar fecha
  const setFecha = (fecha) => {
    console.log(fecha);
    dispatch({ type: SET_FECHA, payload: fecha });
  };

  // Filtrar contadores por día seleccionado
  const filtrarContadores = (fecha) => {
    loadingContadores();
    dispatch({ type: FILTRAR_CONTADORES, payload: fecha });
  };

  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <ContadoresContext.Provider
      value={{
        zonas: state.zonas,
        contadores: state.contadores,
        contadoresDay: state.contadoresDay,
        contadorSector: state.contadorSector,
        contadorSectorDay: state.contadorSectorDay,
        thisFecha: state.thisFecha,
        loading: state.loading,
        loadingZonas: state.loadingZonas,
        error: state.error,
        getZonas,
        getContadores,
        loadingContadores,
        getContadorSector,
        addContador,
        setThisContador,
        setThisContadorSector,
        filtrarContadores,
        setFecha,
        clearFilter,
        setLoadingZonas,
      }}
    >
      {props.children}
    </ContadoresContext.Provider>
  );
};

export default ContadoresState;
