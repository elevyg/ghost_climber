import React, { useState, Fragment } from 'react';
import GhostCounter from '../batches/GhostCounter';
import SubSectorModal from '../zonas/SubSectorModal';
import GhostTotal from '../batches/GhostTotal';

const SectorCard = ({ sector }) => {
  const { nombre, subsectores } = sector;
  const [showModal, setShowModal] = useState(false);

  return (
    <Fragment>
      <button
        onClick={() => setShowModal(true)}
        className='inline-block flex justify-between items-center rounded overflow-hidden shadow-lg m-3 w-fulk bg-gray-300'
      >
        <div className='inline-block p-3  text-2xl'>{nombre}</div>
        <div className='mr-3'>
          <GhostTotal />
        </div>
      </button>
      {showModal ? (
        <SubSectorModal setShowModal={() => setShowModal()} />
      ) : null}
    </Fragment>
  );
};

export default SectorCard;
