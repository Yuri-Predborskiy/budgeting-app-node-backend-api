const express = require('express');
const morgan = require('morgan');
require('express-async-errors');
const bodyParser = require('body-parser');

const finalErrorHandlerMiddleware = require('./middlewares/finalErrorHandler');
const routes = require('./routes');

const app = express();
app.use(bodyParser.json());
app.use(morgan('combined'));

app.get('/status', (req, res) => res.sendStatus(200));
app.use('/api', routes);
app.all('*', (req, res, next) => res.sendStatus(404));
app.use(finalErrorHandlerMiddleware);

module.exports = app;
