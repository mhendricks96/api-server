const express = require('express');

const router = express.Router();
const { DoctorCollection } = require('../model');



router.post('/doctor', create);
// router.get('', read);
// router.get(':id', read);
// router.put(':id', update);
// router.delete(':id', destroy);



async function create(req, res){
  let doctorObj = req.query;
  console.log(doctorObj);
  let doctor = await DoctorCollection.create(doctorObj);
  res.status(201).send(doctor);
}




// router.get('/doctor', async (req, res) => {
//   let doctors = await DoctorCollection.read(req.params.id);
//   res.status(200).send(doctors);
// });

// router.get('/doctor/:id', async (req, res) => {
//   let doctor = await DoctorCollection.read(req.params.id);
//   req.statusCode(200).send(doctor);
// });

// router.post('/doctor', async (req, res) => {
//   let doctor = await DoctorCollection.create(req.body);
//   res.status(201).send(doctor);
// });


module.exports = router;