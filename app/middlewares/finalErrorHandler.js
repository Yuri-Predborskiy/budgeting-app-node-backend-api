function processError(error) {
  error.statusCode = error.statusCode || 500;
  error.message = error.message || 'Internal server error';
  return error;
}

function finalErrorHandler(err, req, res, next) {
  const errorObject = processError(err);

  if (errorObject.statusCode === 400) {
    console.error('Request error:', err);
  } else if (errorObject.statusCode === 500) {
    console.error('Server error:', err);
  } else {
    console.error('Error in final error handler:', err);
  }

  res.status(errorObject.statusCode).json(errorObject.message);
}

module.exports = finalErrorHandler;
