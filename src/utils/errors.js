class BadRequestError extends Error {
  constructor(message) {
    super(message || 'Bad request');
    this.name = 'Bad request';
    this.statusCode = 400;
  }
}

class NotFoundError extends Error {
  constructor(message) {
    super(message || 'Not found');
    this.name = 'Not found';
    this.statusCode = 404;
  }
}

module.exports = {
  BadRequestError,
  NotFoundError
}
