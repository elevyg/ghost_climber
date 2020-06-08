const moment = require('moment');

const thisFecha = new Date();
console.log(thisFecha);

const todayJSthenMoment = moment(thisFecha);
console.log(todayJSthenMoment);

const todayMoment = moment();
console.log(todayMoment);

const oneDate = moment({ y: 2020, m: 7, d: 5 });

console.log(todayJSthenMoment.isBefore(moment(), 'day'));
console.log(todayMoment.isBefore(moment(), 'day'));
