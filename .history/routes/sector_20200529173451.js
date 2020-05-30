const express = require('express');

const {
  getSectores,
  getSector,
  crearSector,
  actualizarSector,
  eliminarSector,
} = require('../controllers/sector');

// Zona model
const Zona = require('../models/Sector');
// Advanced results middleware
const advancedResults = require('../middleware/advancedResults');

const router = express.Router();

router.route('/').get(advancedResults(Zona), getZonas).post(crearZona);

router.route('/:id').get(getZona).put(actualizarZona).delete(eliminarZona);

module.exports = router;
