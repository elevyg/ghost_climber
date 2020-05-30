import React, { useContext, useEffect, useState } from 'react';
import ZonasContext from '../../context/zonas/zonasContext';
import Zona from './Zona';

const ZonasList = () => {
  {zonasGroup,setZonasGroup} = useState()
  const zonasContext = useContext(ZonasContext);

  const { zonas, getZonas, loading } = zonasContext;

  useEffect(() => {
    getZonas();
    // eslint-disable-next-line
  }, []);

  const groupBy = (xs, key) => {
    return xs.reduce(function (rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };
  console.log(zonas);
  if (zonas) {
    let zonasGroup = groupBy(zonas, 'comuna');
    console.log(zonasGroup);
  }

  if (zonas !== null && zonas.length === 0 && !loading) {
    return <h4> Error </h4>;
  }

  return (
    <div className='flex flex-wrap items-starts w-3/4'>
      {zonasGroup && <h1>Zonas List</h1>}
      {/* {// zonasGroup.map((zona) => <Zona key={zona.id} zona={zona} />
      )} */}
    </div>
  );
};

export default ZonasList;
