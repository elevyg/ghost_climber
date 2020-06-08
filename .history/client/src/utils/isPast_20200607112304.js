const isPast = (dOne) => {
  const d1 = new Date(dOne);
  const d2 = new Date(); // Today

  return (
    d1.getFullYear() < d2.getFullYear() ||
    (d1.getMonth() < d2.getMonth() && d1.getFullYear() < d2.getFullYear()) ||
    (d1.getDate() < d2.getDate() &&
      d1.getMonth() < d2.getMonth() &&
      d1.getFullYear() < d2.getFullYear())
  );
};

export default isPast;
