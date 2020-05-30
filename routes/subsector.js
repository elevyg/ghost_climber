const express = require('express');

const {
  getSubsector,
  getSubsectores,
  editarSubsector,
  crearSubsector,
  eliminarSubsector,
} = require('../controllers/subsector');
const router = express.Router({ mergeParams: true });

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
