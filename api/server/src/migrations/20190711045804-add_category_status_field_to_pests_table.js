'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
            return Promise.all([
                queryInterface.addColumn('pests', 'category', {
                    type: Sequelize.STRING
                }, { transaction: t }),
                queryInterface.addColumn('pests', 'status_bhutan', {
                    type: Sequelize.STRING,
                }, { transaction: t })
            ])
        })
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
                queryInterface.removeColumn('pests', 'category', { transaction: t }),
                queryInterface.removeColumn('pests', 'status_bhutan', { transaction: t })
            ])
  }
};
