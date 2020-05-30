const express = require('express');

const {
  getContadores,
  getContador,
  crearContador,
  editarContador,
  eliminarContador,
} = require('../controllers/contador');
const router = express.Router({ mergeParams: true });

const Contador = require('../models/Contador');

const advancedResults = require('../middleware/advancedResults');
// const { protect, authorize } = require('../middleware/auth');

router
  .route('/')
  .get(
    advancedResults(Contador, {
      path: 'subsector',
      select: '_id',
    }),
    getContadores
  )
  .post(crearContador);

router
  .route('/:id')
  .get(crearContador)
  .put(editarContador)
  .delete(eliminarContador);

module.exports = router;
