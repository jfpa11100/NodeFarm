const express = require('express');
const morgan = require('morgan');

const toursRouter = require('./routes/tourRoutes');
const usersRouter = require('./routes/userRoutes');

const app = express();

//1) Middlewares
app.use(morgan('dev'));
app.use(express.json());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  //Never forget to call the next function
  next();
});

app.use('/api/tours', toursRouter);
app.use('/api/users', usersRouter);


module.exports = app;