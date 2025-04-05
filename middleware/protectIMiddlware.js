const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const apiError = require("../utils/apierror");

exports.protectMiddlware = asyncHandler(async (req, res, next) => {
  const token = getTokenFromHeaders(req);
  if (!token)
    return next(
      new apiError(
        "You are not logged in. Please log in to access this route.",
        401
      )
    );

  let decoded;
  try {
    decoded = verifyToken(token);
  } catch (error) {
    return next(new apiError("Invalid or expired token", 401));
  }

  const currentUser = await getUserById(decoded.userId);

  if (!currentUser)
    return next(new apiError("This user no longer exists", 401));

  if (hasPasswordChanged(currentUser, decoded))
    return next(
      new apiError("User changed their password. Please log in again.", 401)
    );

  req.user = currentUser; // Perfect approach
  next();
});

// 1) Check if token exists
function getTokenFromHeaders(req) {
  const authorizationHeader = req.headers.authorization;
  if (authorizationHeader && authorizationHeader.startsWith("Bearer")) {
    return authorizationHeader.split(" ")[1];
  }
  return null;
}

// 2) Verify token
function verifyToken(token) {
  try {
    return jwt.verify(token, process.env.JWT_SECRET_KEY);
  } catch (error) {
    throw new Error("Invalid or expired token");
  }
}

// 3) Get user by ID
async function getUserById(userId) {
  return userModel.findById(userId);
}

// 4) Check if user changed their password after token creation
function hasPasswordChanged(user, decodedToken) {
  if (user.passwordChangedAt) {
    const passChangedTimestamps = parseInt(
      user.passwordchangedAt.getTime() / 1000,
      10
    );
    return passChangedTimestamps > decodedToken.iat;
  }
  return false;
}
