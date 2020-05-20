import React from 'react';

const SectorCard = ({ sector }) => {
  const { nombre, subsector } = sector;

  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg m-3'>
      <div className=''>
        <div className='px-3 font-bold text-2xl mb-2 bg-gray-300'>{nombre}</div>
        {subsector &&
          subsector.map((sb) => (
            <div className='flex items-center justify-left .w-screen border-b'>
              <div className='block .w-{3/4} group hover:bg-blue p-4 '>
                <p className=' text-lg mb-1 text-black group-hover:text-white'>
                  {sb.nombre}
                </p>
                <p className=' text-sm mb-1 text-gray-700 group-hover:text-white'>
                  {`Número de vías: ${sb.n_vias}`}
                </p>
              </div>
              <div className='.w-{1/4}'>
                <div className='bg-blue-100 border-b rounded p-1 m-1 .items-center .content-center .content-center '>
                  {Math.round(Math.random() * 12)}
                  <i className='fas fa-ghost text-gray-500 ml-1'></i>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SectorCard;
