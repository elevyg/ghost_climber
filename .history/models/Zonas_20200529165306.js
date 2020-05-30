const mongoose = require('mongoose');

const ZonaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Por favor agregar un nombre a la zona'],
    trim: true,
    maxlength: [50, 'El nombre no puede tener más de 50 caracteres'],
  },
});
