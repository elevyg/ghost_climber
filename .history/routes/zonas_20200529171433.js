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
