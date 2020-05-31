import React, { Fragment } from 'react';
import SubSectorCard from './SubSectorCard';
import BorderBtn from '../custom-buttons/BorderBtn';
import NoBorderBtn from '../custom-buttons/NoBorderBtn';

const SubSectorModal = ({ setShowModal, subsectores, sector }) => {
  console.log('Sub Sector Modal Component On');
  return (
    <Fragment>
      <div className='justify-center items-center flex  overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
        <div className='relative w-auto my-6 mx-auto max-w-3xl'>
          {/*content*/}
          <div className=' rounded-t bg-white w-full h-full p-2 '>
            <h1 className='text'>{sector}</h1>
          </div>
          <div className='border-0  relative flex flex-col w-full h-full bg-white outline-none focus:outline-none'>
            <div className='grid grid-flow-col grid-rows-3 gap-4 p-3'>
              {subsectores &&
                subsectores.map((sb) => <SubSectorCard key={sb._id} sb={sb} />)}
            </div>
            {/*footer*/}
            <div className='flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b'>
              <NoBorderBtn
                titulo={'Cerrar'}
                funcion={() => setShowModal(false)}
              />
              <BorderBtn
                titulo={'Guardar'}
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
