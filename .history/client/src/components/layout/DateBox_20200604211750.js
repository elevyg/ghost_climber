import React, { Fragment, useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';
registerLocale('es', es);

const DateBox = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <Fragment>
      <div className='flex items-stretch p-20 '>
        <button className='border-box bg-gray-400 active:bg-gray-500 p-3 rounded-l focus:outline-none'>
          <i className='fas fa-chevron-left'></i>
        </button>
        <DatePicker
          selected={startDate}
          todayButton='Hoy'
          onChange={(date) => setStartDate(date)}
          showPopperArrow={false}
          popperPlacement='bottom'
          locale='es'
          placeholderText='Weeks start on Monday'
          shouldCloseOnSelect={false}
          className='bg-gray-300  w-40 py-3 pl-6 text-xl tracking-wide  text-gray-700 outline-none'
          calendarClassName='font-sans border-none  text-lg tracking-wide opacity-75  '
          wrapperClassName=''
          popperClassName='border-none'
        />
        <button className='bg-gray-400 p-3 rounded-r'>
          <i className='fas fa-chevron-right'></i>
        </button>
      </div>
    </Fragment>
  );
};

export default DateBox;
