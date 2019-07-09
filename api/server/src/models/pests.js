'use strict';
module.exports = (sequelize, DataTypes) => {
  const pests = sequelize.define('pests', {
    name: DataTypes.STRING,
    scientificname: DataTypes.STRING,
    casualorganism: DataTypes.STRING,
    host: DataTypes.STRING,
    biology: DataTypes.TEXT,
    symptoms: DataTypes.TEXT,
    distribution: DataTypes.STRING,
    spreadmeans: DataTypes.TEXT,
    phytosanitaryrisk: DataTypes.TEXT,
    phytosanitarymeasures: DataTypes.TEXT
  }, {});
  pests.associate = function(models) {
    // associations can be defined here
  };
  return pests;
};