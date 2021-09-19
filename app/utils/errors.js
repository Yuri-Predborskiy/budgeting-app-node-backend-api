class BadRequestError extends Error {
  constructor(message) {
    super(message || 'Bad request');
    this.name = 'Bad request error';
    this.code = 400;
  }
}

class NotFoundError extends Error {
  constructor(message) {
    super(message || 'Not found');
    this.name = 'Not found error';
    this.code = 404;
  }
}

module.exports = {
  BadRequestError,
  NotFoundError
}
