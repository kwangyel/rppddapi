'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.createTable('counters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      viewcount: {
        type: Sequelize.BIGINT
      }
    });
  },
  down: function down(queryInterface, Sequelize) {
    return queryInterface.dropTable('counters');
  }
};
//# sourceMappingURL=20190818175333-create-counter.js.map