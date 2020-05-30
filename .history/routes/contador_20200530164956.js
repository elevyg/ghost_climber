const express = require('express');

const {
  getContadores,
  getContador,
  crearContador,
  editarContador,
  eliminarContador,
} = require('../controllers/contador');
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
