import React, { Fragment } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';
registerLocale('es', es);

const DateBox = () => {
  return (
    <Fragment>
      <DatePicker
        {...this.props}
        dateFormat={this.dateFormat}
        locale='es'
        ref={(node) => {
          this.ref = node;
        }}
        onClickOutside={this.clickOutside}
      />
    </Fragment>
  );
};

export default DateBox;
