import React, { Fragment } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';
registerLocale('es', es);

const DateBox = () => {
  return (
    <Fragment>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        locale='en-GB'
        placeholderText='Weeks start on Monday'
      />
    </Fragment>
  );
};

export default DateBox;
