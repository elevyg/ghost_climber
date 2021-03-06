import React, { useState, useEffect, useContext } from 'react';
import ContadoresContext from '../../context/contadores/contadoresContext';

const GhostCounter = ({ sb }) => {
  const [counter, setCounter] = useState(0);
  const [contador, setContador] = useState(null);
  // Contadores states
  const contadoresContext = useContext(ContadoresContext);
  const { addContador, setThisContador, thisContador } = contadoresContext;

  useEffect(() => {
    setContador(setThisContador(sb._id));
    console.log(contador.contador);
  }, []);

  // add 1 to the couter
  const countOne = () => {
    if (counter <= 2) {
      let count = counter + 1;
      setCounter(count);
      const contadorActualizado = {
        contador: count,
        fecha: Date.now(),
      };
      addContador(contadorActualizado, thisContador._id);
    }
  };

  const resetCount = () => setCounter(0);

  return (
    <div id='' className='relative flex pr-3 items-center justify-center'>
      <button
        className={` inline-block flex justify-center items-center rounded w-12 px-3 focus:outline-none ' 
          ${
            contador === 0
              ? 'bg-blue-200 text-gray-500'
              : 'bg-blue-500 text-white'
          }
            `}
        onClick={countOne}
      >
        {contador && <h5 className=''>{contador.contador}</h5>}
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
