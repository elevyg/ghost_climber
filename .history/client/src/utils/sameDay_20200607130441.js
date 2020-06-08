import moment from 'moment';

const sameDay = (dOne, dTwo) => {
  const d1 = moment.tz(dOne, 'America/Santiago');
  console.log(d1);
  const d2 = moment.tz(DTwo, 'America/Santiago');
  console.log(d2);
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
};

export default sameDay;
