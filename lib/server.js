'use strict';

const express = require('express');
// express singleton
const app = express();
// const cors = require('cors');
const doctorRouter = require('./routes/doctor.routes.js');
const patientRouter = require('./routes/patient.routes.js');

const err404 = require('./middleware/err404.js');
const err500 = require('./middleware/err500.js');

const logger = require('./middleware/logger.js');
app.use(express.json());

app.use(logger);
app.use(doctorRouter);
app.use('/patient', patientRouter);

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


