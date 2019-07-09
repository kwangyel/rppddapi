'use strict';

module.exports = function (sequelize, DataTypes) {
  var images = sequelize.define('images', {
    src: DataTypes.STRING,
    pestid: DataTypes.INTEGER,
    source: DataTypes.TEXT,
    caption: DataTypes.TEXT
  }, {});

  images.associate = function (models) {// associations can be defined here
  };

  return images;
};
//# sourceMappingURL=images.js.map