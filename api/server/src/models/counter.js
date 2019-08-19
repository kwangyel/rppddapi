'use strict';
module.exports = (sequelize, DataTypes) => {
  const counter = sequelize.define('counter', {
    viewcount: DataTypes.BIGINT
  },{
  	  timestamps:false
  });
  counter.associate = function(models) {
    // associations can be defined here
  };
  return counter;
};