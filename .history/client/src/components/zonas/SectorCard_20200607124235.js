import React, { useState, Fragment, useContext, useEffect } from 'react';
import SubSectorModal from '../zonas/SubSectorModal';
import GhostTotal from '../batches/GhostTotal';
import ContadoresContext from '../../context/contadores/contadoresContext';
import Spinner from '../layout/Spinner';
import sameDay from '../../utils/sameDay';

// Filter funcion for array of cotadores by date and sector
// const setContador = (contadorArr, fecha, sectorId) => {
//   const cont = contadorArr.filter((cS) => {
//     return cS._id.sector === sectorId && sameDay(cS.fecha, fecha);
//   });
//   if (cont.length > 0) {
//     const { contador: res } = cont.find(({ contador }) => contador);
//     return res;
//   } else {
//     return 0;
//   }
// };

const SectorCard = ({ sector }) => {
  const { nombre, subsectores } = sector;
  const [showModal, setShowModal] = useState(false);
  const [contador, setContador] = useState(null);

  // Contadores states
  const contadoresContext = useContext(ContadoresContext);
  const {
    contadorSector,
    thisFecha,
    filtrarContadores,
    setThisContadorSector,
  } = contadoresContext;

  // const [contador, setContador] = useState(0);

  useEffect(() => {
    setContador(setThisContadorSector(sector._id));
  }, [sector]);

  // if (contadorSector) {
  //   contador = setContador(contadorSector, thisFecha, sector._id);
  // }

  return (
    <Fragment>
      <button
        onClick={() => {
          setShowModal(true);
          filtrarContadores(thisFecha);
        }}
        className='inline-block flex justify-between  items-stretch md:items-center rounded shadow-lg m-3 md:w-64 bg-gray-300 focus:outline-none'
      >
        <div className='inline-block p-3  text-2xl'>{nombre}</div>
        <div className='flex mr-3'>
          {!contadorSector ? <Spinner /> : <GhostTotal contador={contador} />}
        </div>
      </button>
      {showModal ? (
        <div className='flex'>
          <SubSectorModal
            setShowModal={() => setShowModal()}
            subsectores={subsectores}
            sector={nombre}
          />
        </div>
      ) : null}
    </Fragment>
  );
};

export default SectorCard;
