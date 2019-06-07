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
      'bart_routes',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true
        },

        destination: {
          type: Sequelize.TEXT,
          allowNull: false
        },
        stations: {
          type: Sequelize.ARRAY(Sequelize.TEXT),
            allowNull: false
        }
      })
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.dropTable('bart_routes')
  }
};