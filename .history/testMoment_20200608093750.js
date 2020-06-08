const moment = require('moment');

const thisFecha = new Date();

const today = moment(thisFecha);

const oneDate = moment({ y: 2020, m: 7, d: 5 });

console.log(oneDate);

console.log(today.isBefore(moment(), 'seconds'));
