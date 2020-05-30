const express = require('express');

const {
  getSubsector,
  getSubsectores,
  editarSubsector,
  crearSubsector,
  eliminarSubsector,
} = require('../controllers/subsector');

// Include other resource routers
const subsectorRouter = require('./subsector');

const router = express.Router();

// Re-route into other resource routers
router.use('/:sectorId/subsectores', subsectorRouter);

const Subsector = require('../models/Subsector');

const advancedResults = require('../middleware/advancedResults');
// const { protect, authorize } = require('../middleware/auth');

router
  .route('/')
  .get(
    advancedResults(Subsector, {
      path: 'sector',
      select: 'nombre',
    }),
    getSubsectores
  )
  .post(crearSubsector);

router
  .route('/:id')
  .get(crearSubsector)
  .put(editarSubsector)
  .delete(eliminarSubsector);

module.exports = router;
