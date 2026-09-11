// Express recognises this as an error-handling middleware because it
// takes four arguments. Any call to next(err) anywhere in the app
// ends up here.
function errorHandler(err, req, res, next) {
  console.error(err.stack);
  const status = err.status || 500;
  res.status(status).json({
    error: err.message || "Internal Server Error",
  });
}

module.exports = errorHandler;
