'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.createTable(
          'users',
          {
            id: {

              type: Sequelize.INTEGER,
              primaryKey: true,
              autoIncrement: true
            },
            create_at: {
              type: Sequelize.DATE,
                defaultValue: Sequelize.literal('NOW()'),
                allowNull: false
            },
            username: {
              type: Sequelize.STRING,
                allowNull: false
            },
            password: {
              type: Sequelize.STRING,
                allowNull: false
            },
            bart_start_station: {
              type: Sequelize.STRING,
                allowNull: true
            },
            bart_destination_station: {
              type: Sequelize.STRING,
                allowNull: true
            }
          }
      );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.dropTable('users');
  }
};
