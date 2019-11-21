'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      }
    });
  },
  down: function down(queryInterface, Sequelize) {
    return queryInterface.dropTable('users');
  }
};
//# sourceMappingURL=20190812094154-create-user.js.map