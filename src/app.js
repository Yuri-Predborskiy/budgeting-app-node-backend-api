const express = require('express');
const morgan = require('morgan');
require('express-async-errors');
const bodyParser = require('body-parser');

const finalErrorHandlerMiddleware = require('./middlewares/finalErrorHandler');
const routers = require('./routers');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('combined'));

app.get('/status', (req, res) => res.sendStatus(200));

app.use('/api', routers);

app.all('*', (req, res, next) => res.sendStatus(404));

app.use(finalErrorHandlerMiddleware);

module.exports = app;
