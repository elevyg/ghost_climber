const mongoose = require('mongoose');

const ZonaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Por favor agregar un nombre a la zona'],
  },
});
