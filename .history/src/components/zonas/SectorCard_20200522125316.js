import React from 'react';

const SectorCard = ({ sector }) => {
  const { nombre, subsector } = sector;

  return (
    <div className='w-10000 rounded overflow-hidden shadow-lg m-3'>
      <div className=''>
        <div className='px-3 font-bold text-2xl  bg-gray-300 '>{nombre}</div>
        {subsector &&
          subsector.map((sb) => (
            <div className='box-border flex items-center w-full justify-left border-b hover:bg-gray-200'>
              <div className='block w-2/3 group hover:bg-blue p-2 '>
                <p className=' text-lg mb-1 text-black '>{sb.nombre}</p>
                <p className=' text-xs mb-1 text-gray-700 group-hover:text-white'>
                  {`Número de vías: ${sb.n_vias}`}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SectorCard;
