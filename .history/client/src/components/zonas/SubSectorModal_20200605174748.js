import React, { Fragment, useContext, useEffect } from 'react';
import SubSectorCard from './SubSectorCard';
import ContadoresContext from '../../context/contadores/contadoresContext';

import NoBorderBtn from '../custom-buttons/NoBorderBtn';

const SubSectorModal = ({ setShowModal, subsectores, sector }) => {
  const contadoresContext = useContext(ContadoresContext);
  const { filtrarContadores, thisFecha } = contadoresContext;

  useEffect(() => {
    filtrarContadores(thisFecha);

    // eslint-disable-next-line
  });

  return (
    <Fragment>
      <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
        <div className='relative w-screen  max-h-screen md:max-w-2xl my-4 mx-auto '>
          {/*content*/}
          <div className='rounded-t bg-gray-500 w-full h-full p-2 text-white flex items-center  justify-start '>
            <h1 className='text-xl font-bold'>{sector}</h1>
          </div>
          <div className='border-0 flex flex-col w-full h-full bg-white outline-none focus:outline-none rounded-b'>
            <div className='grid grid-cols-1 md:grid-cols-3  grid-flow-row-dense p-3 overflow-x-hidden'>
              {subsectores &&
                subsectores.map((sb) => <SubSectorCard key={sb._id} sb={sb} />)}
            </div>
            {/*footer*/}
            <div className='flex items-center justify-end p-3 rounded-b'>
              <NoBorderBtn
                titulo={'Cerrar'}
                funcion={() => setShowModal(false)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
    </Fragment>
  );
};

export default SubSectorModal;
