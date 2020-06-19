import React, { useState, Fragment, useContext, useEffect } from 'react';
import SubSectorModal from '../zonas/SubSectorModal';
import GhostTotal from '../batches/GhostTotal';
import ContadoresContext from '../../context/contadores/contadoresContext';
import Spinner from '../layout/Spinner';

const SectorCard = ({ sector }) => {
  const { nombre, subsectores } = sector;
  const [showModal, setShowModal] = useState(false);
  const [contador, setContador] = useState(null);

  // Contadores states
  const contadoresContext = useContext(ContadoresContext);
  const { contadorSector, setThisContadorSector } = contadoresContext;

  useEffect(() => {
    setContador(setThisContadorSector(sector._id));
  }, [sector, setThisContadorSector]);

  return (
    <Fragment>
      <button
        onClick={() => {
          setShowModal(true);
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
