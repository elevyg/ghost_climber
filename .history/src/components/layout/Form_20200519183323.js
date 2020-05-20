import React from 'react';

const Form = () => {
  return (
    <div className='container flex flex-col bg-gray-500 rounded  shadow-md  m-3 w-1/3 p-3'>
      <h1 className='text-2xl strong text-white border-b mb-3'>
        Creo que ire a ...{' '}
      </h1>
      <form>
        <label
          className='block  shadow-md  text-white text-xl'
          htmlFor='sector'
        >
          Sector:
        </label>
        <select name='sector' id='sector'>
          <option value='Chilcas'>Las Chilcas</option>
          <option value='Manyos'> Los Manyos</option>
          <option value='Palestras'>Las Palestras</option>
          <option value='Chacabuco'>Chacabuco</option>
        </select>
      </form>
    </div>
  );
};

export default Form;
