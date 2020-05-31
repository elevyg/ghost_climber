import React, { useContext, useEffect } from 'react';
import ZonasContext from '../../context/zonas/zonasContext';
import Zona from './Zona';
import GhostLoading from '../layout/GhostLoading';

const ZonasList = () => {
  const zonasContext = useContext(ZonasContext);

  const { zonas, getZonas, loading } = zonasContext;

  useEffect(() => {
    getZonas();
    // eslint-disable-next-line
  }, []);

  if (zonas !== null && zonas.length === 0 && !loading) {
    return <h4> Error </h4>;
  }

  return (
    <div className='flex flex-wrap items-starts w-3/4'>
      {loading & !zonas : <GhostLoading />
      zonas && zonas.map((zona) => <Zona key={zona.comuna} zona={zona} />)}
    </div>
  );
};

export default ZonasList;
