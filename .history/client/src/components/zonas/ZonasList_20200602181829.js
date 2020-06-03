import React, { useContext, useEffect } from 'react';
import ZonasContext from '../../context/zonas/zonasContext';
import Zona from './Zona';
import GhostLoading from '../layout/GhostLoading';
import ContadoresContext from '../../context/contadores/contadoresContext';

const ZonasList = () => {
  const zonasContext = useContext(ZonasContext);
  const { zonas, getZonas, loading } = zonasContext;

  if (zonas) {
    console.log(zonas);
    const sectores = zonas.map((z) => z.sector);

    const sectoresId = [];

    for (let i = 0; i <= sectores.length; i++) {
      if (sectores[i].length > 1) {
        sectores[i].map((s) => sectoresId.push(s._id));
      } else {
        sectoresId.push(sectores[i]._id);
      }
    }
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
