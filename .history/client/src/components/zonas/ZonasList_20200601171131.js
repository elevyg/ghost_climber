import React, { useContext, useEffect } from 'react';
import ZonasContext from '../../context/zonas/zonasContext';
import Zona from './Zona';
import GhostLoading from '../layout/GhostLoading';
import ContadoresContext from '../../context/contadores/contadoresContext';
import { get } from 'mongoose';

const ZonasList = () => {
  const zonasContext = useContext(ZonasContext);
  const { zonas, getZonas, loading } = zonasContext;

  const contadoresContext = useContext(ContadoresContext);
  const { getContadores } = contadoresContext;

  useEffect(() => {
    getZonas();
    getContadores();
    // eslint-disable-next-line
  }, []);

  if (zonas !== null && zonas.length === 0 && !loading) {
    return <h4> Error </h4>;
  }

  return (
    <div className='flex flex-wrap items-baseline'>
      {loading & !zonas ? (
        <GhostLoading />
      ) : (
        zonas && zonas.map((zona) => <Zona key={zona.comuna} zona={zona} />)
      )}
    </div>
  );
};

export default ZonasList;
