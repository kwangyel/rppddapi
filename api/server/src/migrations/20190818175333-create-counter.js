'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('counters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      viewcount: {
        type: Sequelize.BIGINT
      },
    })},
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('counters');
  }
};