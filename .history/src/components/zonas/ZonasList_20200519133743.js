import React, { useContext, useEffect } from 'react';
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
    <div className='grid-col-1'>
      {zonas && zonas.map((zona) => <Zona key={zona.id} zona={zona} />)}
    </div>
  );
};

export default ZonasList;
