'use strict';
const express = require('express');

const { PatientCollection } = require('../model');

const patientRouter = express.Router();

patientRouter.get('/patient', async (req, res) => {
  let patients = await PatientCollection.read(req.params.id);
  req.statusCode(200).send(patients);
});
patientRouter.get('/patient/:id', async (req, res) => {
  let patient = await PatientCollection.read(req.params.id);
  req.statusCode(200).send(patient);
});

patientRouter.post('/patient', async (req, res) => {
  let patient = await PatientCollection.create(req.body);
  res.status(201).send(patient);
});

// patientRouter.put('patient/:id', async (req, res) => {

// })

// patientRouter.delete('patient/:id', async (req, res) => {

// })




module.exports = patientRouter;