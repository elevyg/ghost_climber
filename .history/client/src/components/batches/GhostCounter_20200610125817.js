import React, { useState, useEffect, useContext } from 'react';
import ContadoresContext from '../../context/contadores/contadoresContext';
import Spinner from '../layout/Spinner';
import moment from 'moment';

const GhostCounter = ({ sb }) => {
  const [counter, setCounter] = useState(0);
  // Contador Global
  const [contador, setContador] = useState(null);
  // Contadores states
  const contadoresContext = useContext(ContadoresContext);
  const { addContador, setThisContador, thisFecha } = contadoresContext;

  useEffect(() => {
    if (sb) {
      setContador(setThisContador(sb._id));
      // eslint-disable-next-line
    }
  }, [sb, setThisContador]);

  // add 1 to the couter
  const countOne = () => {
    setCounter((prevCount) => Math.min(prevCount + 1, 3));
    const contadorActualizado = {
      subsector: {
        _id: sb._id,
      },
      contador: 1,
      fecha: thisFecha,
    };

    addContador(contadorActualizado, contador._id, sb.sector);
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

  return (
    <div id='' className='relative flex pr-3 items-center justify-center'>
      <button
        className={` inline-block flex justify-center items-center rounded w-12 px-3 focus:outline-none ' 
          ${
            contador &&
            (moment(thisFecha).isBefore(moment(), 'day')
              ? 'bg-gray-800 text-white'
              : contador.contador === 0 && counter === 0
              ? 'bg-blue-200 text-gray-500'
              : 'bg-blue-500 text-white')
          } 
            `}
        onClick={countOne}
        disabled={moment(thisFecha).isBefore(moment(), 'day')}
      >
        {contador ? <h5 className=''>{contador.contador}</h5> : <Spinner />}
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

export default React.memo(GhostCounter);
