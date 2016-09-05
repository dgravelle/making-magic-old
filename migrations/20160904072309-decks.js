'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('decks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
          references: {
                model: 'users',
                key: 'id'
            },
            onUpdate: 'cascade',
            onDelete: 'cascade',
            type: Sequelize.INTEGER
      },
      title: {
          allowNull: false,
          type: Sequelize.STRING
      },
      format: {
          allowNull: false,
          type: Sequelize.STRING
      },
      description: {
          type: Sequelize.STRING
      },
      colors: {
          type: Sequelize.ARRAY(Sequelize.TEXT)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('decks');
  }
};
