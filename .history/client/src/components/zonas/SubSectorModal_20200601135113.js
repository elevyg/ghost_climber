import React, { Fragment } from 'react';
import SubSectorCard from './SubSectorCard';
import BorderBtn from '../custom-buttons/BorderBtn';
import NoBorderBtn from '../custom-buttons/NoBorderBtn';

const SubSectorModal = ({ setShowModal, subsectores, sector }) => {
  console.log('Sub Sector Modal Component On');
  return (
    <Fragment>
      <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
        <div className='relative max-w-2xl max-h-screen sm:w-screen my-6 mx-auto '>
          {/*content*/}
          <div className='rounded-t bg-gray-500 w-full h-full p-2 text-white flex items-center  justify-start '>
            <h1 className='text-xl font-bold'>{sector}</h1>
          </div>
          <div className='border-0  relative flex flex-col w-full bg-white outline-none focus:outline-none rounded-b'>
            <div className='grid grid-cols-3 grid-row-col gap-4 p-3 overflow-x-hidden max-h-screen'>
              {subsectores &&
                subsectores.map((sb) => <SubSectorCard key={sb._id} sb={sb} />)}
            </div>
            {/*footer*/}
            <div className='flex items-center justify-end p-3 rounded-b'>
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
