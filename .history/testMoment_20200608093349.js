const moment = require('moment');

const thisFecha = new Date();

const today = moment(this);

const oneDate = moment('2020-06-05');

console.log(oneDate);

console.log(oneDate.isBefore('day'));
