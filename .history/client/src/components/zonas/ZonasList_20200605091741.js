import React, { useContext, useEffect } from 'react';
// import { useAsync } from 'react-async-hook';
import ZonasContext from '../../context/zonas/zonasContext';
import Zona from './Zona';
import GhostLoading from '../layout/GhostLoading';
import ContadoresContext from '../../context/contadores/contadoresContext';

const ZonasList = () => {
  const zonasContext = useContext(ZonasContext);
  const { zonas, getZonas, loading } = zonasContext;

  const contadoresContext = useContext(ContadoresContext);
  const {
    getContadores,
    getContadorSector,
    filtrarContadores,
    contadores,
    thisFecha,
  } = contadoresContext;

  // const loadingCont = contadoresContext.loading;

  useEffect(() => {
    getZonas();
    getContadores();

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (contadores) {
      filtrarContadores(Date.now());
    }

    // eslint-disable-next-line
  }, [contadores]);

  useEffect(() => {
    getContadorSector(zonas);
    // eslint-disable-next-line
  }, [zonas]);

  if (zonas !== null && zonas.length === 0 && !loading) {
    return <h4> Error </h4>;
  }

  return (
    <div className='flex flex-wrap items-baseline'>
      {loading ? (
        <GhostLoading />
      ) : (
        zonas && zonas.map((zona) => <Zona key={zona.comuna} zona={zona} />)
      )}
    </div>
  );
};

export default ZonasList;
