import React, { useContext, useEffect } from 'react';
import GhostCounter from '../batches/GhostCounter';
import ContadoresContext from '../../context/contadores/contadoresContext';

const SubSectorCard = ({ sb }) => {
  const contadoresContext = useContext(ContadoresContext);
  const { getContador, contadores } = contadoresContext;

  useEffect(() => {
    getContador(sb._id);
    // eslint-disable-next-line
  }, []);
  const contador = contadores.filter((cont) => cont.id === sb._id);

  return (
    <div>
      <div
        key={sb._id}
        className='box-border flex items-center justify-center w-full h-full border-b hover:bg-gray-200'
      >
        <div className='w-full px-2 py-3'>
          <p className=' text-lg mb-1 text-black '>{sb.nombre}</p>
          <p className=' text-xs mb-1 text-gray-700 '>
            {`Número de vías: ${sb.nVias}`}
          </p>
        </div>
        <div className='w-full'>
          <GhostCounter subsector={sb._id} />
        </div>
      </div>
    </div>
  );
};

export default SubSectorCard;
