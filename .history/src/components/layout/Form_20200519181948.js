import React from 'react';

const Form = () => {
  return (
    <div className='container bg-gray-500 rounded m-3 w-1/3 p-3'>
      <h1 className='text-2xl strong text-white border-b mb-3'>
        Creo que ire a ...{' '}
      </h1>
      <form>
        <label className='text-white text-xl' htmlFor='name'>
          Nombre
        </label>
      </form>
    </div>
  );
};

export default Form;
