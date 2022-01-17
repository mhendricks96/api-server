const express = require('express');

const { DoctorCollection } = require('../model');

const doctorRouter = express.Router();

doctorRouter.get('/doctor', async (req, res) => {
  let doctors = await DoctorCollection.read(req.params.id);
  res.status(200).send(doctors);
});

doctorRouter.get('/doctor/:id', async (req, res) => {
  let doctor = await DoctorCollection.read(req.params.id);
  req.statusCode(200).send(doctor);
});

doctorRouter.post('/doctor', async (req, res) => {
  let doctor = await DoctorCollection.create(req.body);
  res.status(201).send(doctor);
});


module.exports = doctorRouter;