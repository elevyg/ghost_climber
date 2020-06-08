const moment = require('moment');

const thisFecha = new Date();
console.log(thisFecha);

const todayJSthenMoment = moment(thisFecha);

const todayMoment = moment();

console.log(today);

const oneDate = moment({ y: 2020, m: 7, d: 5 });

console.log(oneDate);

console.log(todayJSthenMoment.isBefore(moment(), 'day'));
