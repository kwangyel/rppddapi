'use strict';
module.exports = (sequelize, DataTypes) => {
  const images = sequelize.define('images', {
    src: DataTypes.STRING,
    pestid: DataTypes.INTEGER,
    source: DataTypes.TEXT,
    caption: DataTypes.TEXT
  }, {});
  images.associate = function(models) {
    // associations can be defined here
  };
  return images;
};