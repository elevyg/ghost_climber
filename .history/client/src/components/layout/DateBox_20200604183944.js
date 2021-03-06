import React, { Fragment, useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';
registerLocale('es', es);

const DateBox = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <Fragment>
      <DatePicker
        selected={startDate}
        todayButton='Hoy'
        onChange={(date) => setStartDate(date)}
        popperPlacement='bottom'
        locale='es'
        placeholderText='Weeks start on Monday'
        className='bg-gray-300 rounded w-40 py-3 pl-6 text-xl tracking-wide  text-gray-700 outline-none'
        calendarClassName='font-sans border-none rounded text-lg tracking-wide opacity-75 hover:bg-blue-500 '
        wrapperClassName='bg-red-700'
      />
    </Fragment>
  );
};

export default DateBox;
