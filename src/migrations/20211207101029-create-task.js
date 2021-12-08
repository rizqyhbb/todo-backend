'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('task', {
      id_task: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        unique: true,
      },
      id_user: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        references: {model: 'user', key: 'id_user'}
      },
      todo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      status: {
        type: Sequelize.STRING,
        defaultValue: 'incomplete'
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('task');
  }
};