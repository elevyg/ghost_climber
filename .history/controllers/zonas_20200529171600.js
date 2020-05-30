const path = require('path');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Zona = require('../models/Zona');

// @desc:     Obtener todas las zonas
// @route     GET /api/v1/zonas
// @access:   Public
exports.getZonas = asyncHandler(async (req, res, next) => {
  res.status(200).json({
    ...res.advancedResults,
    msg: 'Todas las zonas enviadas',
  });
});

// @desc:     Obtener zona en particular
// @route     GET /api/v1/zonas/:id
// @access:   Public
exports.getZona = asyncHandler(async (req, res, next) => {
  const zona = await Zona.findById(req.params.id);

  if (!zonas) {
    return next(
      new ErrorResponse(
        `No se encontraron zonas con el id ${req.params.id}`,
        404
      )
    );
  }
  res.status(200).json({
    success: true,
    data: zona,
    msg: `Zona con id ${req.params.id} enviada`,
  });
});

// @desc:    Create new bootcamp
// @route     POST /api/v1/bootcamps/
// @access:   Private
exports.crearZona = asyncHandler(async (req, res, next) => {
  // Add user to req.body
  // req.body.user = req.user.id;

  // Check for published bootcamp
  // const publishedBootcamp = await Bootcamp.findOne({ user: req.user.id });

  // If user is not an admin, they can only add one bootcamp
  // if (publishedBootcamp && req.user.role !== 'admin') {
  //   return next(
  //     new ErrorResponse(
  //       `The user with ID ${req.user.id} has already published a bootcamp`,
  //       400
  //     )
  //   );
  // }

  const zona = await Zona.create(req.body);

  res.status(201).json({ success: true, data: bootcamp, msg: 'Zona created' });
});

// @desc:     Update bootcamp
// @route     PUT /api/v1/bootcamps/:id
// @access:   Private
exports.actualizarZona = asyncHandler(async (req, res, next) => {
  let zona = await Zona.findById(req.params.id);

  if (!zona) {
    return next(
      new ErrorResponse(`No se encontró zona con el Id ${req.params.id}`, 404)
    );
  }

  // Make sure user is bootcamp owner
  // if (bootcamp.user.toString() !== req.user.id && req.user.role !== 'admin') {
  //   return next(
  //     new ErrorResponse(
  //       `User ${req.params.id} is not authorized to update this bootcamp`,
  //       401
  //     )
  //   );
  // }

  zona = await Zona.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: zona,
    msg: `Bootcamp ${req.params.id} updated`,
  });
});

// @desc:     Delete bootcamp
// @route     DELETE /api/v1/bootcamps/:id
// @access:   Private
exports.deleteBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findById(req.params.id);

  if (!bootcamp) {
    return next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
    );
  }

  // Make sure user is bootcamp owner
  if (bootcamp.user.toString() !== req.user.id && req.user.role !== 'admin') {
    return next(
      new ErrorResponse(
        `User ${req.params.id} is not authorized to delete this bootcamp`,
        401
      )
    );
  }

  bootcamp.remove();

  res.status(200).json({
    success: true,
    data: {},
    msg: `Bootcamp ${req.params.id} deleted`,
  });
});
