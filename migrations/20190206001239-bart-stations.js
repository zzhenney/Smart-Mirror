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
      'bart_stations',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        station_abbr: {
          type: Sequelize.STRING,
          allowNull: false
        },
        station_name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        transfer_station: {
          type: Sequelize.BOOLEAN,
          defaultValue: false,
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
    return queryInterface.dropTable('bart_stations')
  }
};
