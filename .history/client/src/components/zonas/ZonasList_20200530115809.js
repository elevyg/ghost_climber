import React, { useContext, useEffect, useState } from 'react';
import ZonasContext from '../../context/zonas/zonasContext';
import Zona from './Zona';
import _ from 'lodash/groupBy';

const ZonasList = () => {
  const zonasContext = useContext(ZonasContext);

  const { zonas, getZonas, loading } = zonasContext;

  useEffect(() => {
    getZonas();
    // eslint-disable-next-line
  }, []);
  if (zonas) {
    let zonasGroup = groupBy(zonas, 'comuna');
  }
  if (zonas !== null && zonas.length === 0 && !loading) {
    return <h4> Error </h4>;
  }

  return (
    <div className='flex flex-wrap items-starts w-3/4'>
      {/* {zonas &&
        Object.groupBy(zonas, 'comuna').map((zona) => (
          <Zona key={zona.id} zona={zona} />
        ))} */}
    </div>
  );
};

export default ZonasList;
