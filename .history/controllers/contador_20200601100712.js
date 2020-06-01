const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Contador = require('../models/Contador');
const Subsector = require('../models/Subsector');
const sameDay = require('../utils/sameDay');

// @desc:     Obtener contador
// @route     GET /api/v1/contadores
// @route     GET /api/v1/subsectores/:subsectorId/contadores
// @access:   Public
exports.getContadores = asyncHandler(async (req, res, next) => {
  if (req.params.subsectorId) {
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
      msg: 'Todos los contadores enviados',
    });
  }
});

// @desc:     Obtener un contador
// @route     GET /api/v1/contadores/:id
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
    data: contador,
    msg: 'Contador enviado',
  });
});

// @desc:     Crear contador
// @route     POST /api/v1/subsectores/:subsectorId/contadores
// @access:   Private
exports.crearContador = asyncHandler(async (req, res, next) => {
  req.body.subsector = req.params.subsectorId;
  // req.body.user = req.user.id;

  const subsector = await Subsector.findById(req.params.subsectorId);

  if (!subsector) {
    return next(
      new ErrorResponse(
        `No se encontró subsector con el id ${req.params.subsectorId}`,
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

  const sb_contador = await Contador.find({
    subsector: req.params.subsectorId,
  });
  const today = new Date(Date.now);
  const date_sb = sameDay(sb_contador[3].fecha, today);

  console.log(sb_contador[3].fecha + ' = ' + today + ' ? = ' + date_sb);

  if (!subsector) {
    return next(
      new ErrorResponse(
        `No se encontró subsector con el id ${req.params.subsectorId}`,
        404
      )
    );
  }

  // const contador = await Contador.create(req.body);

  res.status(200).json({
    success: true,
    data: {}, //contador,
    msg: 'Contador añadido',
  });
});

// @desc:     Editar contador
// @route     PUT /api/v1/contadores/:id
// @access:   Private
exports.editarContador = asyncHandler(async (req, res, next) => {
  let contador = await Contador.findById(req.params.id);

  if (!contador) {
    return next(
      new ErrorResponse(
        `No se encontró contador con el Id ${req.params.id}`,
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

  contador = await Contador.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: contador,
    msg: `Contador con Id ${req.params.id} actualizado`,
  });
});

// @desc:     Eliminar contador
// @route     DELETE /api/v1/contadores/:id
// @access:   Private
exports.eliminarContador = asyncHandler(async (req, res, next) => {
  const contador = await Contador.findById(req.params.id);

  if (!contador) {
    return next(
      new ErrorResponse(
        `No se encontró contador con el Id ${req.params.id}`,
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

  await contador.remove();

  res.status(200).json({
    success: true,
    data: {},
    msg: `Contador con Id ${req.params.id} eliminado`,
  });
});
