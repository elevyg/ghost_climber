import React, { Fragment, forwardRef, useContext } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';
import ContadoresContext from '../../context/contadores/contadoresContext';
registerLocale('es', es);

const DateBox = () => {
  const contadoresContext = useContext(ContadoresContext);
  const { filtrarContadores, thisFecha, setFecha } = contadoresContext;

  const dayForward = () => {
    const dF = new Date(thisFecha.setDate(thisFecha.getDate() + 1));
    setFecha(dF);
    filtrarContadores(dF);
  };

  const dayBackwards = () => {
    const dB = new Date(thisFecha.setDate(thisFecha.getDate() - 1));
    setFecha(dB);
    filtrarContadores(dB);
  };

  // const ref = React.createRef();
  // const CustomInput = forwardRef(({ onClick, value }, ref) => (
  //   <button
  //     onClick={onClick}
  //     value={value}
  //     onChange={onClick}
  //     ref={ref}
  //     className='bg-gray-300  w-40 py-3 pl-1 text-xl tracking-wide  text-gray-700 outline-none focus:outline-none'
  //   >
  //     {' '}
  //     {value}
  //   </button>
  // ));

  // customInput={<CustomInput ref={ref} />}
  return (
    <Fragment>
      <div className='flex items-stretch'>
        <button
          className='border-box bg-gray-400 active:bg-gray-500 p-3 rounded-l focus:outline-none'
          onClick={dayBackwards}
        >
          <i className='fas fa-chevron-left'></i>
        </button>

        <DatePicker
          selected={thisFecha}
          onChange={(date) => {
            setFecha(date);
            filtrarContadores(date);
          }}
          todayButton='Hoy'
          dateFormat='dd/MM/yyyy'
          showPopperArrow={false}
          popperPlacement='bottom'
          locale='es'
          placeholderText='Weeks start on Monday'
          shouldCloseOnSelect={false}
          className='bg-gray-300  w-40 py-3 pl-6 text-xl tracking-wide  text-gray-700 outline-none'
          calendarClassName='font-sans border-none  text-lg tracking-wide opacity-100  '
          wrapperClassName=''
          popperClassName='border-none'
        />

        <button
          className='bg-gray-400 active:bg-gray-500 p-3 rounded-r focus:outline-none'
          onClick={dayForward}
        >
          <i className='fas fa-chevron-right'></i>
        </button>
      </div>
    </Fragment>
  );
};

export default DateBox;
