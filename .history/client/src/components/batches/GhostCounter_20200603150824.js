import React, { useState, useEffect, useContext } from 'react';
import ContadoresContext from '../../context/contadores/contadoresContext';

const GhostCounter = ({ contGlobal }) => {
  const [counter, setCounter] = useState(0);
  // Contadores states
  const contadoresContext = useContext(ContadoresContext);
  const { addContador } = contadoresContext;

  // add 1 to the couter
  const countOne = () => {
    if (counter <= 2) {
      let count = counter + 1;
      setCounter(count);
    }
  };

  const resetCount = () => setCounter(0);

  useEffect(() => {
    if (contGlobal) {
      const contadorActualizado = {
        contador: counter + contGlobal.contador,
        fecha: Date.now(),
      };
      addContador(contadorActualizado, contGlobal._id);
    }
  }, [counter]);

  return (
    <div id='' className='relative flex pr-3 items-center justify-center'>
      <button
        className={` inline-block flex justify-center items-center rounded w-12 px-3 focus:outline-none ' 
          ${
            counter === 0
              ? 'bg-blue-200 text-gray-500'
              : 'bg-blue-500 text-white'
          }
            `}
        onClick={countOne}
      >
        {contGlobal && <h5 className=''>{counter + contGlobal.contador}</h5>}
        <i className='fas fa-ghost ml-1'></i>
      </button>
      {counter > 0 ? (
        <button
          className='relative inset-y-0 inline-block bg-transparent focus:outline-none flex justify-center items-center text-sm  text-gray-500'
          onClick={resetCount}
        >
          <i className='fas fa-undo ml-3 '></i>
        </button>
      ) : (
        ''
      )}
    </div>
  );
};

//

export default GhostCounter;
