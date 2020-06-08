const moment = require('moment');

const thisFecha = new Date();

const today = moment(this);

const oneDate = moment({ y: 2020, m: 7, d: 5 });

console.log(oneDate);

console.log(oneDate.isBefore('day'));
