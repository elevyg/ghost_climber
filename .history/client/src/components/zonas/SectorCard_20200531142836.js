import React, { useState } from 'react';
import GhostCounter from './GhostCounter';
import SubSectorModal from '../zonas/SubSectorModal';

const SectorCard = ({ sector }) => {
  const { nombre, subsectores } = sector;
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='rounded overflow-hidden shadow-lg m-3 w-px*100'>
      <button onClick={() => setShowModal(true)}>
        <div className=''>
          <div className='p-3 font-bold text-2xl  bg-gray-300 '>{nombre}</div>
        </div>
      </button>
      {showModal ? (
        <SubSectorModal setShowModal={() => setShowModal()} />
      ) : null}
    </div>
  );
};

export default SectorCard;