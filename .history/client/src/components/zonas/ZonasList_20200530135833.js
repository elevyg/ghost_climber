import React, { useContext, useEffect, useState } from 'react';
import ZonasContext from '../../context/zonas/zonasContext';
import Zona from './Zona';

const ZonasList = () => {
  const zonasContext = useContext(ZonasContext);

  const { zonas, getZonas, loading } = zonasContext;

  useEffect(() => {
    getZonas();
    // eslint-disable-next-line
  }, []);

  zonas && console.log(Object.keys(zonas));
  zonas && console.log(zonas);

  if (zonas !== null && zonas.length === 0 && !loading) {
    return <h4> Error </h4>;
  }

  return (
    <div className='flex flex-wrap items-starts w-3/4'>
      {zonas && zonas.entries((zona) => <Zona key={zona.id} zona={zona} />)}
    </div>
  );
};

export default ZonasList;
