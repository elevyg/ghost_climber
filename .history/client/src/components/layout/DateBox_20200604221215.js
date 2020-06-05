import React, { Fragment, useState, useRef } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';
registerLocale('es', es);

const DateBox = () => {
  const [startDate, setStartDate] = useState(new Date());

  const dayForward = () => {
    const dF = new Date(startDate.setDate(startDate.getDate() + 1));
    setStartDate(dF);
  };

  const datepickerRef = useRef(null);

  const onChange = (e) => {
    console.log(datepickerRef.current.value);
  };

  const dayBackwards = () => {
    const dF = new Date(startDate.setDate(startDate.getDate() - 1));
    setStartDate(dF);
  };

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
          selected={startDate}
          ref={datepickerRef}
          onChange={setDate}
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
