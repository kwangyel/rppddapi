'use strict';

module.exports = function (sequelize, DataTypes) {
  var user = sequelize.define('user', {
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    timestamps: false
  });

  user.associate = function (models) {// associations can be defined here
  };

  return user;
};
//# sourceMappingURL=user.js.map