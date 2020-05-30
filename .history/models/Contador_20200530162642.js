const mongoose = require('mongoose');

const ContadorSchema = new mongoose.Schema({
  contador: Number,
  subsector: {
    type: mongoose.Schema.ObjectId,
    ref: 'Subsector',
    required: true,
  },
});

module.exports = mongoose.model('Subsector', SubsectorSchema);
