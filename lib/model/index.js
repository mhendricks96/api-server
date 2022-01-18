'use strict';

const { Sequelize, DataTypes } = require('sequelize');

const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory:';

const Collection = require('./Collection.js');

const patientSchema = require('./patient.schema.js');
const doctorSchema = require('./doctor.schema.js');

// const db = new Sequelize(DATABASE_URL);


const db = new Sequelize(DATABASE_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

const PatientModel = patientSchema(db, DataTypes);
const DoctorModel = doctorSchema(db, DataTypes);
console.log(DoctorModel);
console.log(doctorSchema);


//create an association between the 2 tables
// DoctorModel.hasMany(PatientModel, {foreignKey: 'doctorID', sourceKey: 'id'});

// PatientModel.belongsTo(DoctorModel, {foreignKey: 'doctorID', targetKey: 'id'});


module.exports = {
  db,
  PatientCollection: new Collection(PatientModel),
  DoctorCollection: new Collection(DoctorModel),
};