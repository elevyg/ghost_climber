const mongoose = require('mongoose');

const SubsectorSchema = new mongoose.Schema({
  nombre: {
    type: String,
    trim: true,
    required: [true, 'Please add a course title'],
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
  },
  nVias: Number,
  vias: [Sring]
  sector: {
    type: mongoose.Schema.ObjectId,
    ref: 'Sector',
    required: true,
  },
});

module.exports = mongoose.model('Subsector', SubsectorSchema);
