'use strict';

const express = require('express');
// express singleton
const app = express();

const doctorRouter = require('./routes/doctor.js');
const patientRouter = require('./routes/patient.js');

const err404 = require('./middleware/err404.js');
const err500 = require('./middleware/err500.js');

const logger = require('./middleware/logger.js');

app.use(logger);
app.use(express.json());

app.use(doctorRouter);
app.use(patientRouter);

app.use(err404);
app.use(err500);

module.exports = {
  start: (port) => {
    app.listen(port, () => {
      console.log(`hi, michael. your server is running on ${port}`);
    });
  },
  app,
};


