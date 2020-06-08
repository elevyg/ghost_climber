import moment from 'moment-timezone';

const sameDay = (dOne, dTwo) => {
  const d1 = moment.tz(dOne, 'America/Santiago');
  console.log(d1);
  const d2 = moment.tz(dTwo, 'America/Santiago');
  console.log(d2);

  return moment(d1).isSame(d2, 'day');
};

export default sameDay;
