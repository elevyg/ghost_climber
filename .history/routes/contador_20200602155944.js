const express = require('express');

// 5ed1d0434bf5360e87261301 Las Palestras

const {
  getContadores,
  getContador,
  getContadorSeccion,
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
  .post(crearContador)
  .get(getContadorSeccion);

router
  .route('/:id')
  .get(getContador)
  .put(editarContador)
  .delete(eliminarContador);

module.exports = router;
