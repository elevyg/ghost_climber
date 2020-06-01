const mongoose = require('mongoose');

const ContadorSchema = new mongoose.Schema({
  contador: {
    type: Number,
    default: 0,
  },
  fecha: {
    type: Date,
    default: Date.now,
  },
  subsector: {
    type: mongoose.Schema.ObjectId,
    ref: 'Subsector',
    required: true,
  },
});

module.exports = mongoose.model('Contador', ContadorSchema);
