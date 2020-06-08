const moment = require('moment');

const thisFecha = new Date();

const today = moment(this);

const oneDate = moment('2020-06-05T13:32:15.878Z');

console.log(oneDate);

console.log(oneDate.isBefore('day'));
