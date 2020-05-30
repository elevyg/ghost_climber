const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Subsector = require('../models/Subsector');
const Sector = require('../models/Sector');

// @desc:     Obtener subsectores
// @route     GET /api/v1/subsectores
// @route     GET /api/v1/sectores/:sectorId/subsectores
// @access:   Public
exports.getSubsectores = asyncHandler(async (req, res, next) => {
  if (req.params.sectoresId) {
    const subsectores = await Subsector.find({ sector: req.params.sectorId });

    return res.status(200).json({
      success: true,
      count: subsectores.length,
      data: subsectores,
      msg: `Subsectores enviados del sector id ${req.params.sectoresId}`,
    });
  } else {
    res.status(200).json({
      ...res.advancedResults,
      msg: 'Todos los subsectores enviados',
    });
  }
});

// @desc:    Obtener un subsecto
// @route     GET /api/v1/subsectores/:id
// @access:   Public
exports.getSubsector = asyncHandler(async (req, res, next) => {
  const subsector = await Subsector.findById(req.params.id).populate({
    path: 'sector',
    select: 'name',
  });

  if (!subsector) {
    return next(
      new ErrorResponse(
        `No se encontró subsector con el Id ${req.params.id}`,
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

// @desc:     Add a course
// @route     POST /api/v1/bootcamps/:bootcampId/courses
// @access:   Private
exports.addCourse = asyncHandler(async (req, res, next) => {
  req.body.bootcamp = req.params.bootcampId;
  req.body.user = req.user.id;

  const bootcamp = await Bootcamp.findById(req.params.bootcampId);

  if (!bootcamp) {
    return next(
      new ErrorResponse(
        `No bootcamp with the id of ${req.params.bootcampId}`,
        404
      )
    );
  }

  // Make sure that the course is owned by the user
  if (bootcamp.user.toString() !== req.user.id && req.user.role !== 'admin') {
    return next(
      new ErrorResponse(
        `User ${req.user.id} is not authorized to add a course to ${bootcamp.id} bootcamp`,
        401
      )
    );
  }

  const course = await Course.create(req.body);

  res.status(200).json({
    success: true,
    data: course,
    msg: 'Course added',
  });
});

// @desc:     Update course
// @route     PUT /api/v1/courses/:id
// @access:   Private
exports.updateCourse = asyncHandler(async (req, res, next) => {
  let course = await Course.findById(req.params.id);

  if (!course) {
    return next(
      new ErrorResponse(`No course with the id of ${req.params.id}`, 404)
    );
  }

  // Make sure that the course is owned by the user
  if (course.user.toString() !== req.user.id && req.user.role !== 'admin') {
    return next(
      new ErrorResponse(
        `User ${req.user.id} is not authorized to update course  ${course.id}`,
        401
      )
    );
  }

  course = await Course.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: course,
    msg: 'Course updated',
  });
});

// @desc:     Delete course
// @route     DELETE /api/v1/courses/:id
// @access:   Private
exports.deleteCourse = asyncHandler(async (req, res, next) => {
  const course = await Course.findById(req.params.id);

  if (!course) {
    return next(
      new ErrorResponse(`No course with the id of ${req.params.id}`, 404)
    );
  }

  // Make sure that the course is owned by the user
  if (course.user.toString() !== req.user.id && req.user.role !== 'admin') {
    return next(
      new ErrorResponse(
        `User ${req.user.id} is not authorized to update course  ${course.id}`,
        401
      )
    );
  }

  await course.remove();

  res.status(200).json({
    success: true,
    data: {},
    msg: 'Course deleted',
  });
});
