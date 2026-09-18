export const notFoundHandler = (req, res) => {
  return res.status(404).json({
    message: "Route not found",
  });
};

export const errorHandler = (err, req, res, next) => {
  // Detailed error only on the server
  console.error({
    message: err.message,
    method: req.method,
    path: req.originalUrl,
  });

  // Generic error for the client
  return res.status(err.statusCode || 500).json({
    message:
      err.statusCode && err.statusCode < 500
        ? err.message
        : "Internal server error",
  });
};
