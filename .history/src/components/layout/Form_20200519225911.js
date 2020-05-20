import React from 'react';

const Form = () => {
  return (
    <div className='container flex flex-col bg-gray-500 rounded  shadow-md  m-3 w-1/3 p-3'>
      <h1 className='text-2xl strong text-white border-b mb-3'>
        Creo que ire a ...{' '}
      </h1>
      <form>
        <label
          className='block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2'
          for='grid-state'
        >
          Sector
        </label>
        <select class='form-select block w-full mt-1' id='grid-state'>
          <option value='Chilcas'>Las Chilcas</option>
          <option value='Manyos'> Los Manyos</option>
          <option value='Palestras'>Las Palestras</option>
          <option value='Chacabuco'>Chacabuco</option>
        </select>
        <div class='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'></div>
        <label
          className='block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2 mt-3'
          for='grid-state'
        >
          Número de escaladores
        </label>
      </form>
    </div>
  );
};

export default Form;
