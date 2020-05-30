const path = require('path');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Sector = require('../models/Sector');

// @desc:     Obtener todas las zonas
// @route     GET /api/v1/sectores
// @access:   Public
exports.getSectores = asyncHandler(async (req, res, next) => {
  res.status(200).json({
    ...res.advancedResults,
    msg: 'Todas las zonas enviadas',
  });
});

// @desc:     Obtener zona en particular
// @route     GET /api/v1/sectores/:id
// @access:   Public
exports.getSector = asyncHandler(async (req, res, next) => {
  const sector = await Sector.findById(req.params.id);

  if (!sector) {
    return next(
      new ErrorResponse(`No se encontró sector con el id ${req.params.id}`, 404)
    );
  }
  res.status(200).json({
    success: true,
    data: sector,
    msg: `Sector con id ${req.params.id} enviada`,
  });
});

// @desc:     Crear un nuevo sector de escalada
// @route     POST /api/v1/bootcamps/
// @access:   Private
exports.crearSector = asyncHandler(async (req, res, next) => {
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

  const sector = await Sector.create(req.body);

  res.status(201).json({ success: true, data: sector, msg: 'Sector creado' });
});

// @desc:     Actualizar sector
// @route     PUT /api/v1/bootcamps/:id
// @access:   Private
exports.actualizarSector = asyncHandler(async (req, res, next) => {
  let sector = await Sector.findById(req.params.id);

  if (!sector) {
    return next(
      new ErrorResponse(`No se encontró sector con el id ${req.params.id}`, 404)
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

  sector = await Sector.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: sector,
    msg: `Sector ${req.params.id} actualizada`,
  });
});

// @desc:     Delete bootcamp
// @route     DELETE /api/v1/bootcamps/:id
// @access:   Private
exports.eliminarSector = asyncHandler(async (req, res, next) => {
  const sector = await Sector.findById(req.params.id);

  if (!sector) {
    return next(
      new ErrorResponse(`No se encontró sector con el Id ${req.params.id}`, 404)
    );
  }

  // // Make sure user is bootcamp owner
  // if (bootcamp.user.toString() !== req.user.id && req.user.role !== 'admin') {
  //   return next(
  //     new ErrorResponse(
  //       `User ${req.params.id} is not authorized to delete this bootcamp`,
  //       401
  //     )
  //   );
  // }

  sector.remove();

  res.status(200).json({
    success: true,
    data: {},
    msg: `Sector ${req.params.id} eliminado`,
  });
});
