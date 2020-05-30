const express = require('express');

const {
  getZonas,
  getZona,
  crearZona,
  actualizarZona,
  eliminarZona,
} = require('../controllers/zonas');

// Zona model
const Zona = require('../models/Zona');
// Advanced results middleware
const advancedResults = require('../middleware/advancedResults');

const router = express.Router();

router.route('/').get(advancedResults(Zona), getZonas).post(crearZona);

router.route('/:id').get(getZona).put(actualizarZona).delete(eliminarZona);

module.exports = router;
