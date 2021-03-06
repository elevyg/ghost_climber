const crypto = require('crypto');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const User = require('../models/User');

// @desc:     Register user
// @route     POST /api/v1/auth/register
// @access:   Public
exports.register = asyncHandler(async (req, res, next) => {
  const { name, email, password, role } = req.body;
  // Create user
  const user = await User.create({
    userName,
    password,
    role,
  });

  // Create token
  sendTokenResponse(user, 200, res, 'User created');
});

// @desc:     Login a user
// @route     POST /api/v1/auth/login
// @access:   Public
exports.login = asyncHandler(async (req, res, next) => {
  const { userName, password } = req.body;

  // Validate email and password
  if (!userName || !password) {
    return next(
      new ErrorResponse('Please provide and email and password', 400)
    );
  }

  // Check for user
  const user = await User.findOne({ userName }).select('+password');

  if (!user) {
    return next(new ErrorResponse('Invalid Credentials', 401));
  }
  // Check if password matches
  const isMatch = await user.matchPassword(password);

  if (!isMatch) {
    return next(new ErrorResponse('Invalid Credentials', 401));
  }
  sendTokenResponse(user, 200, res, 'User logged in');
});

// @desc:     Get current logged in user
// @route     POST /api/v1/auth/me
// @access:   Private
exports.getMe = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id);

  res.status(200).json({
    success: true,
    data: user,
    msg: 'This user sent',
  });
});

// @desc:     Log user out/ Clear coookie
// @route     GET /api/v1/auth/logout
// @access:   Private
exports.logout = asyncHandler(async (req, res, next) => {
  res.cookie('token', 'none', {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    data: {},
    msg: 'User logout',
  });
});

// @desc:    Update users detail
// @route     PUT /api/v1/auth/updatedetails
// @access:   Private
exports.updateDetails = asyncHandler(async (req, res, next) => {
  const fieldsToUpdate = {
    userName: req.body.name,
  };

  const user = await User.findByIdAndUpdate(req.user.id, fieldsToUpdate, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: user,
    msg: 'This user sent',
  });
});

// @desc:     Update password
// @route     PUT /api/v1/auth/updatepassword
// @access:   Private
exports.updatePassword = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id).select('+password');

  // Check current password
  if (!(await user.matchPassword(req.body.currentPassword))) {
    return next(new ErrorResponse('Password is incorrect', 401));
  }

  if (await user.matchPassword(req.body.newPassword)) {
    return next(
      new ErrorResponse(
        'New password cannot be the same as current password',
        401
      )
    );
  }

  user.password = req.body.newPassword;
  await user.save();

  sendTokenResponse(user, 200, res, 'Password updated');
});

// Get token from model, create cookie and send response
const sendTokenResponse = (user, statusCode, res, msg) => {
  // Create token
  const token = user.getSignedJwtToken();

  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  if (process.env.NODE_ENV === 'production') {
    options.secure = true;
  }

  res
    .status(statusCode)
    .cookie('token', token, options)
    .json({ success: true, token, msg });
};
