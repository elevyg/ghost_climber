import React, { Fragment } from 'react';
import { Cerrar } from '../Buttons/Cerrar';

const SubSectorModal = ({ setShowModal, showModal }) => {
  console.log('Sub Sector Modal Component On');
  return (
    <Fragment>
      <div
        className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'
        onClick={() => setShowModal(false)}
      >
        <div className='relative w-auto my-6 mx-auto max-w-3xl'>
          {/*content*/}
          <div className='border-0 rounded relative flex flex-col w-full h-full bg-white outline-none focus:outline-none'>
            <div className=''></div>
            {/*footer*/}
            <div className='flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b'>
              <Cerrar titulo={'Cerrar'} funcion={''} />
              <button
                className='bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1'
                type='button'
                style={{ transition: 'all .15s ease' }}
                onClick={() => setShowModal(false)}
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
    </Fragment>
  );
};

export default SubSectorModal;
