'use strict';

module.exports = function (sequelize, DataTypes) {
  var comments = sequelize.define('comments', {
    email: DataTypes.STRING,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    pest_id: DataTypes.INTEGER,
    comment: DataTypes.TEXT
  }, {});

  comments.associate = function (models) {// associations can be defined here
  };

  return comments;
};
//# sourceMappingURL=comments.js.map