'use strict';

const PatientSchema = (sequelize, DataTypes) => {
  sequelize.define('Patient', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    doctorID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
    },
  });
};

module.exports = PatientSchema;