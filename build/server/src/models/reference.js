'use strict';

module.exports = function (sequelize, DataTypes) {
  var reference = sequelize.define('reference', {
    pest_id: DataTypes.INTEGER,
    reference: DataTypes.TEXT
  }, {});

  reference.associate = function (models) {// associations can be defined here
  };

  return reference;
};
//# sourceMappingURL=reference.js.map