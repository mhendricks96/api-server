'use strict';

const DoctorSchema = (sequelize, DataTypes) => {
  sequelize.define('Artist', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};

module.exports = DoctorSchema;