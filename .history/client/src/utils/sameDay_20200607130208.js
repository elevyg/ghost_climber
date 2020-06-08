import moment from 'moment';

const sameDay = (dOne, dTwo) => {
  const d1 = moment(dOne).tz('America/Santiago');
  console.log(d1);
  const d2 = moment(dTwo).tz('America/Santiago');
  console.log(d2);
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
};

export default sameDay;
