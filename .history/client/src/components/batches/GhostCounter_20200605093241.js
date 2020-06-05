import React, { useState, useEffect, useContext } from 'react';
import ContadoresContext from '../../context/contadores/contadoresContext';
import isPast from '../../utils/isPast';

const GhostCounter = ({ sb }) => {
  const [counter, setCounter] = useState(0);
  const [contador, setContador] = useState(0);
  // Contadores states
  const contadoresContext = useContext(ContadoresContext);
  const { addContador, setThisContador, thisFecha } = contadoresContext;

  console.log(isPast(thisFecha));

  // add 1 to the couter
  const countOne = () => {
    if (counter <= 2) {
      let count = counter + 1;
      setCounter(count);
      const contadorActualizado = {
        subsector: {
          _id: sb._id,
        },
        contador: 1,
        fecha: thisFecha,
      };

      addContador(contadorActualizado, contador._id, sb.sector);
    }
  };

  const resetCount = () => {
    setCounter(0);
    const contadorActualizado = {
      subsector: {
        _id: sb._id,
      },
      contador: -counter,
      fecha: thisFecha,
    };

    addContador(contadorActualizado, contador._id, sb.sector);
  };

  useEffect(() => {
    if (sb) {
      setContador(setThisContador(sb._id));
      // eslint-disable-next-line
    }
  }, [sb, setThisContador]);

  return (
    <div id='' className='relative flex pr-3 items-center justify-center'>
      <button
        className={` inline-block flex justify-center items-center rounded w-12 px-3 focus:outline-none ' 
          ${
            contador.contador === 0 && counter === 0
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
