const moment = require('moment');

const thisFecha = new Date();
console.log(thisFecha);

const today = moment(thisFecha).format('DD MM YYYY');
console.log(thisFecha);
console.log(today);

const oneDate = moment({ y: 2020, m: 7, d: 5 });

console.log(oneDate);

console.log(today.isBefore(moment(), 'year'));
