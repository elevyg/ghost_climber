import moment from 'moment';

const sameDay = (dOne, dTwo) => {
  const d1 = new Date(dOne);
  console.log(d1);
  const d2 = new Date(dTwo);
  console.log(d2);
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
};

export default sameDay;
