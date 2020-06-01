const mongoose = require('mongoose');
const moment = require('moment');

const ContadorSchema = new mongoose.Schema({
  contador: {
    type: Number,
    default: 0,
  },
  fecha: {
    type: Date,
    default: Date.now.format(YYYY MM DD ),
  },
  fecha_last_update: Date,
  subsector: {
    type: mongoose.Schema.ObjectId,
    ref: 'Subsector',
    required: true,
  },
});

module.exports = mongoose.model('Contador', ContadorSchema);
