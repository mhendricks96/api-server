'use strict';
const express = require('express');
const router = express.Router();

const { PatientCollection, DoctorCollection } = require('../model');

router.post('', create);
// router.get('', read);
// router.get(':id', read);
// router.put(':id', update);
// router.delete(':id', destroy);



async function create(req, res){
  let patientObj = req.body;
  let patient = await PatientCollection.create(patientObj);
  res.status(201).send(patient);
}


// router.get('/patient', async (req, res) => {
//   let patients = await PatientCollection.read(req.params.id);
//   req.statusCode(200).send(patients);
// });
// router.get('/patient/:id', async (req, res) => {
//   let patient = await PatientCollection.read(req.params.id);
//   req.statusCode(200).send(patient);
// });


// router.put('patient/:id', async (req, res) => {

// })

// router.delete('patient/:id', async (req, res) => {

// })




module.exports = router;