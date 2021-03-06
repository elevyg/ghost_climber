const express = require('express');

const {
  getSectores,
  getSector,
  crearSector,
  actualizarSector,
  eliminarSector,
} = require('../controllers/sector');

// Zona model
const Sector = require('../models/Sector');
// Advanced results middleware
const advancedResults = require('../middleware/advancedResults');

// Include other resource routers
const subsectorRouter = require('./subsector');

const router = express.Router();

// Re-route into other resource routers
router.use('/:sectorId/subsectores', subsectorRouter);

router
  .route('/')
  .get(advancedResults(Sector, 'subsectores'), getSectores)
  .post(crearSector);

router
  .route('/:id')
  .get(getSector)
  .put(actualizarSector)
  .delete(eliminarSector);

module.exports = router;
