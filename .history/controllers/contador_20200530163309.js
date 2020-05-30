const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Contador = require('../models/Contador');
const Subsector = require('../models/Subsector');

// @desc:     Obtener contador
// @route     GET /api/v1/contador
// @route     GET /api/v1/subsectores/:subsectorId/contador
// @access:   Public
exports.getContadores = asyncHandler(async (req, res, next) => {
  if (req.params.subsectoresId) {
    const contadores = await Contador.find({
      subsector: req.params.subsectorId,
    });

    return res.status(200).json({
      success: true,
      count: contadores.length,
      data: contadores,
      msg: `Contadores enviados`,
    });
  } else {
    res.status(200).json({
      ...res.advancedResults,
      msg: 'Todos los subsectores enviados',
    });
  }
});

// @desc:     Obtener un contador
// @route     GET /api/v1/subsectores/:id
// @access:   Public
exports.getContador = asyncHandler(async (req, res, next) => {
  const contador = await Contador.findById(req.params.id).populate({
    path: 'subsector',
    select: '_id',
  });

  if (!contador) {
    return next(
      new ErrorResponse(
        `No se encontró contador con el Id ${req.params.id}`,
        404
      )
    );
  }

  res.status(200).json({
    success: true,
    data: subsector,
    msg: 'Subsector enviado',
  });
});

// @desc:     Crear subsector
// @route     POST /api/v1/sectores/:sectorId/subsectores
// @access:   Private
exports.crearSubsector = asyncHandler(async (req, res, next) => {
  req.body.sector = req.params.sectorId;
  // req.body.user = req.user.id;

  const sector = await Sector.findById(req.params.sectorId);

  if (!sector) {
    return next(
      new ErrorResponse(
        `No se encontró sector con el id ${req.params.bootcampId}`,
        404
      )
    );
  }

  // Make sure that the course is owned by the user
  // if (bootcamp.user.toString() !== req.user.id && req.user.role !== 'admin') {
  //   return next(
  //     new ErrorResponse(
  //       `User ${req.user.id} is not authorized to add a course to ${bootcamp.id} bootcamp`,
  //       401
  //     )
  //   );
  // }

  const subsector = await Subsector.create(req.body);

  res.status(200).json({
    success: true,
    data: subsector,
    msg: 'Subsector añadido',
  });
});

// @desc:     Editar subsector
// @route     PUT /api/v1/subsectores/:id
// @access:   Private
exports.editarSubsector = asyncHandler(async (req, res, next) => {
  let subsector = await Subsector.findById(req.params.id);

  if (!subsector) {
    return next(
      new ErrorResponse(
        `No se encontró subsector con el Id ${req.params.id}`,
        404
      )
    );
  }

  // // Make sure that the course is owned by the user
  // if (course.user.toString() !== req.user.id && req.user.role !== 'admin') {
  //   return next(
  //     new ErrorResponse(
  //       `User ${req.user.id} is not authorized to update course  ${course.id}`,
  //       401
  //     )
  //   );
  // }

  subsector = await Subsector.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: subsector,
    msg: 'Subsector actualizado',
  });
});

// @desc:     Eliminar subsectores
// @route     DELETE /api/v1/subsectores/:id
// @access:   Private
exports.eliminarSubsector = asyncHandler(async (req, res, next) => {
  const subsector = await Subsector.findById(req.params.id);

  if (!subsector) {
    return next(
      new ErrorResponse(
        `No se encontró subsector con el Id ${req.params.id}`,
        404
      )
    );
  }

  // Make sure that the course is owned by the user
  // if (course.user.toString() !== req.user.id && req.user.role !== 'admin') {
  //   return next(
  //     new ErrorResponse(
  //       `User ${req.user.id} is not authorized to update course  ${course.id}`,
  //       401
  //     )
  //   );
  // }

  await subsector.remove();

  res.status(200).json({
    success: true,
    data: {},
    msg: 'Subsector eliminado',
  });
});
