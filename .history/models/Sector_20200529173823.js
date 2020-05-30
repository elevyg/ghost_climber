const mongoose = require('mongoose');

const SectorSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: [true, 'Por favor agregar un nombre a la zona'],
      trim: true,
      maxlength: [50, 'El nombre no puede tener más de 50 caracteres'],
    },
    descripcion: {
      type: String,
      maxlength: [500, 'La descripción no puede superar los 500 caracteres'],
    },
    enCuarentena: Boolean,
    comuna: String,
    region: String,
    pais: String,
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

module.exports = mongoose.model('Sector', SectorSchema);
