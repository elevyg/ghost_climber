import React from 'react';

const SectorCard = ({ sector }) => {
  const { nombre, subsector } = sector;

  return (
    <div className='.w-auto rounded overflow-hidden shadow-lg m-3'>
      <div className=''>
        <div className='px-3 font-bold text-2xl  bg-gray-300 '>{nombre}</div>
        {subsector &&
          subsector.map((sb) => (
            <div className='flex items-center justify-left border-b hover:bg-gray-100'>
              <div className='block .w-24 group hover:bg-blue p-4 '>
                <p className=' text-lg mb-1 text-black '>{sb.nombre}</p>
                <p className=' text-sm mb-1 text-gray-700 group-hover:text-white'>
                  {`Número de vías: ${sb.n_vias}`}
                </p>
              </div>
              <div className='.w-12 flex '>
                <div className='bg-blue-100 border-b rounded p-1 m-1 .items-center .content-center .justify-center .w-10 '>
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
