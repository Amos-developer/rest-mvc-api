import jwt from "jsonwebtoken";

// Authentication middleware
export const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      message: "Authentication required",
    });
  }

  const parts = authHeader.split(" ");

  if (parts.length !== 2 || parts[0] !== "Bearer") {
    return res.status(401).json({
      message: "Invalid authorization header",
    });
  }

  const token = parts[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired token",
    });
  }
};

// Authorization middleware
export const authorizeRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        message: "You do not have permission",
      });
    }

    next();
  };
};

// Self or Admin authorization middleware
export const selfOrAdmin = (req, res, next) => {
  const requestedUserId = Number(req.params.id);

  const loggedInUserId = Number(req.user.id);

  if (loggedInUserId !== requestedUserId && req.user.role !== "admin") {
    return res.status(403).json({
      message: "You cannot access another user",
    });
  }

  next();
};