'use strict';

module.exports = function (sequelize, DataTypes) {
  var counter = sequelize.define('counter', {
    viewcount: DataTypes.BIGINT
  }, {
    timestamps: false
  });

  counter.associate = function (models) {// associations can be defined here
  };

  return counter;
};
//# sourceMappingURL=counter.js.map