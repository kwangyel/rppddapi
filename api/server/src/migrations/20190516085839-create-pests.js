'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        unique: true
      },
      scientificname: {
        type: Sequelize.STRING
      },
      casualorganism: {
        type: Sequelize.STRING
      },
      host: {
        type: Sequelize.TEXT
      },
      biology: {
        type: Sequelize.TEXT
      },
      symptoms: {
        type: Sequelize.TEXT
      },
      distribution: {
        type: Sequelize.TEXT
      },
      spreadmeans: {
        type: Sequelize.TEXT
      },
      phytosanitaryrisk: {
        type: Sequelize.TEXT
      },
      phytosanitarymeasures: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('pests');
  }
};