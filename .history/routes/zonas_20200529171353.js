const express = require('express');

const {
  getZonas,
  getZona,
  crearZona,
  actualizarZona,
  eliminarZona,
} = require('../controllers/zonas');

// Bootcamp model
const Bootcamp = require('../models/Bootcamp');
// Advanced results middleware
const advancedResults = require('../middleware/advancedResults');
