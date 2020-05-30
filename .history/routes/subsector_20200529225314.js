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
const { protect, authorize } = require('../middleware/auth');

router
  .route('/')
  .get(
    advancedResults(Course, {
      path: 'bootcamp',
      select: 'name description',
    }),
    getCourses
  )
  .post(protect, authorize('publisher', 'admin'), addCourse);

router
  .route('/:id')
  .get(getCourse)
  .put(protect, authorize('publisher', 'admin'), updateCourse)
  .delete(protect, authorize('publisher', 'admin'), deleteCourse);

module.exports = router;
