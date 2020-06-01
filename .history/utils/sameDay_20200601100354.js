const sameDay = (d1, d2) => {
  const d1 = new Date(d1);
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
};

module.exports = sameDay;
