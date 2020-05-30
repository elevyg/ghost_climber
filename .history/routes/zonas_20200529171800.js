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

router.route('/').get(advancedResults(Zona), getZonas).post(crearZona);

router
  .route('/:id')
  .get(getBootcamp)
  .put(protect, authorize('publisher', 'admin'), updateBootcamp)
  .delete(protect, authorize('publisher', 'admin'), deleteBootcamp);

module.exports = router;
