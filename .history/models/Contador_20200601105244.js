const mongoose = require('mongoose');
const moment = require('moment');

const ContadorSchema = new mongoose.Schema({
  contador: {
    type: Number,
    default: 0,
  },
  fecha: {
    type: Date,
    required: [true, 'Debe asignarle una fecha al contador'],
  },
  fecha_last_update: Date,
  subsector: {
    type: mongoose.Schema.ObjectId,
    ref: 'Subsector',
    required: true,
  },
});

module.exports = mongoose.model('Contador', ContadorSchema);
