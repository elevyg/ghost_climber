import React, { useContext, useEffect } from 'react';
import ZonasContext from '../../context/zonas/zonasContext';
import Zona from './Zona';
import GhostLoading from '../layout/GhostLoading';
import ContadoresContext from '../../context/contadores/contadoresContext';

const ZonasList = () => {
  const zonasContext = useContext(ZonasContext);
  const { zonas, getZonas, loading } = zonasContext;

  if (zonas) {
    const sectores = zonas.map((z) => z.sector);

    const sectoresId = [];

    for (let i = 0; i < sectores.length; i++) {
      sectores[i].map((s) => sectoresId.push(s._id));
    }

 
  }

  const contadoresContext = useContext(ContadoresContext);
  const { getContadores, getContadorSector } = contadoresContext;

  useEffect(() => {
    // if (sector._id) {
    /   for (let j in sectoresId) {
      getContadorSector(sectoresId[j]);
    }
    // }
  });

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
