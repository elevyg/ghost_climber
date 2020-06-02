import React, { useState, Fragment } from 'react';
import SubSectorModal from '../zonas/SubSectorModal';
import GhostTotal from '../batches/GhostTotal';

const SectorCard = ({ sector }) => {
  const { nombre, subsectores } = sector;
  const [showModal, setShowModal] = useState(false);

  const subsectoresId = subsectores.map((s) => s._id);
  return (
    <Fragment>
      <button
        onClick={() => setShowModal(true)}
        className='inline-block flex justify-between  items-stretch md:items-center rounded shadow-lg m-3 md:w-64 bg-gray-300 focus:outline-none'
      >
        <div className='inline-block p-3  text-2xl'>{nombre}</div>
        <div className='flex mr-3'>
          <GhostTotal subsectoresId={subsectoresId} />
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
