const sameDay = (dOne, dTwo) => {
  const d1 = new Date(dOne);
  const d2 = new Date(dTwo);
  console.log(d1 + ' - ' + d2);
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
};

module.exports = sameDay;
