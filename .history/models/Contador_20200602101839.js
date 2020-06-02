const mongoose = require('mongoose');

const ContadorSchema = new mongoose.Schema({
  contador: {
    type: Number,
    default: 0,
  },
  fecha: {
    type: Date,
    required: [true, 'Debe asignar una fecha al contador'],
  },
  fecha_last_update: Date,
  subsector: {
    type: mongoose.Schema.ObjectId,
    ref: 'Subsector',
    required: true,
  },
});

// Get sum of contadores per Sector
ContadorSchema.statics.getGlobalContador = async function (sectorId) {};

module.exports = mongoose.model('Contador', ContadorSchema);
