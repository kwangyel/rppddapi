'use strict';
module.exports = (sequelize, DataTypes) => {
  const reference = sequelize.define('reference', {
    pest_id: DataTypes.INTEGER,
    reference: DataTypes.TEXT
  }, {});
  reference.associate = function(models) {
    // associations can be defined here
  };
  return reference;
};