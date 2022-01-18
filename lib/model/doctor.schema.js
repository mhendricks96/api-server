'use strict';

const Doctor = (sequelize, DataTypes) => {
  sequelize.define('Doctor', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};

module.exports = Doctor;