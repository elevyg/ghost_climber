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

  if (zonas !== null && zonas.length === 0 && !loading) {
    return <h4> Error </h4>;
  }

  return (
    <div className='flex flex-wrap items-starts w-3/4'>
      {zonas &&
        zonas.map((zona) => (
          <div key={zona.id}>
            <h1>{zona.nombre}</h1>
            <h2>{zona.comuna}</h2>
            <h3>{zona.region}</h3>
          </div>
          // <Zona key={zona.id} zona={zona} />
        ))}
    </div>
  );
};

export default ZonasList;
