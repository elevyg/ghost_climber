import React, { useContext, useEffect } from 'react';
import ZonasContext from '../../context/zonas/zonasContext';
import Zona from './Zona';
import GhostLoading from '../layout/GhostLoading';
import ContadoresContext from '../../context/contadores/contadoresContext';

const ZonasList = () => {
  const zonasContext = useContext(ZonasContext);
  const { zonas, getZonas, loading } = zonasContext;

  if (zonas) {
    const sectoresId = zonas.map((z) => z.sector._id);
    console.log(sectoresId);
  }

  const contadoresContext = useContext(ContadoresContext);
  const { getContadores } = contadoresContext;

  // const contadoresContext = useContext(ContadoresContext);
  // const { getContadorSector } = contadoresContext;

  // useEffect(() => {
  //   if (sector._id) {
  //     const cont = getContadorSector(sector._id);
  //   }
  // });

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
