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
        onChange={(date) => setStartDate(date)}
        locale='es'
        placeholderText='Weeks start on Monday'
        className='bg-gray-300 rounded w-full py-3 px-1 pl-20 text-2'
      />
    </Fragment>
  );
};

export default DateBox;
