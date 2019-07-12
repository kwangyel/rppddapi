'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(function (t) {
      return Promise.all([queryInterface.addColumn('pests', 'category', {
        type: Sequelize.STRING
      }, {
        transaction: t
      }), queryInterface.addColumn('pests', 'status_bhutan', {
        type: Sequelize.STRING
      }, {
        transaction: t
      })]);
    });
  },
  down: function down(queryInterface, Sequelize) {
    return Promise.all([queryInterface.removeColumn('pests', 'category', {
      transaction: t
    }), queryInterface.removeColumn('pests', 'status_bhutan', {
      transaction: t
    })]);
  }
};
//# sourceMappingURL=20190711045804-add_category_status_field_to_pests_table.js.map