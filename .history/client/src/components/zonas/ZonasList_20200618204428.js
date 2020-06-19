import React, { useContext, useEffect } from 'react';
import Zona from './Zona';
import GhostLoading from '../layout/GhostLoading';
import ContadoresContext from '../../context/contadores/contadoresContext';

const ZonasList = () => {
  const contadoresContext = useContext(ContadoresContext);
  const {
    zonas,
    getZonas,
    loadingZonas,
    getContadores,
    getContadorSector,
    filtrarContadores,
    contadores,
    contadorSector,
    thisFecha,
  } = contadoresContext;

  // const loadingCont = contadoresContext.loading;

  useEffect(() => {
    getZonas();
    getContadores();

    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    getContadorSector(zonas);
    // eslint-disable-next-line
  }, [zonas]);

  useEffect(() => {
    // clearFilter();
    if (contadores && contadorSector) {
      filtrarContadores(thisFecha);
    }
    // eslint-disable-next-line
  }, [contadores, contadorSector, thisFecha]);

  if (zonas !== null && zonas.length === 0 && !loadingZonas) {
    return <h4> Error </h4>;
  }

  return (
    <div className='flex flex-wrap items-baseline'>
      {loadingZonas ? (
        <GhostLoading />
      ) : (
        zonas && zonas.map((zona) => <Zona key={zona.comuna} zona={zona} />)
      )}
    </div>
  );
};

export default React.memo(ZonasList);
