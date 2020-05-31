import React, { useState } from 'react';
import GhostCounter from '../batches/GhostCounter';
import SubSectorModal from '../zonas/SubSectorModal';
import GhostTotal from '../batches/GhostTotal';

const SectorCard = ({ sector }) => {
  const { nombre, subsectores } = sector;
  const [showModal, setShowModal] = useState(false);

  return (
    <div className=' rounded overflow-hidden shadow-lg m-3 w-64  bg-gray-300'>
      <button
        onClick={() => setShowModal(true)}
        className='flex justify-center items-center'
      >
        <div className='p-3 font-bold text-2xl'>{nombre}</div>
        <div>
          <GhostTotal />
        </div>
      </button>
      {showModal ? (
        <SubSectorModal setShowModal={() => setShowModal()} />
      ) : null}
    </div>
  );
};

export default SectorCard;
