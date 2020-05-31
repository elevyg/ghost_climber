import React, { useState } from 'react';
import GhostCounter from './GhostCounter';

const SectorCard = ({ sector }) => {
  const { nombre, subsectores } = sector;
  const [showModal, setShowModal] = useState(false);

  const handleX = (nState) => {
    setShowModal(nState);
  };

  return (
    <div className='rounded overflow-hidden shadow-lg m-3 w-full mx-3'>
      <button onClick={() => setShowModal(true)}>
        <div className=''>
          <div className='p-3 font-bold text-2xl  bg-gray-300 '>{nombre}</div>
        </div>
      </button>
    </div>
  );
};

export default SectorCard;
