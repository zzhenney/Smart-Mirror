'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.bulkInsert('bart_stations', [
      { station_abbr: "12th", station_name: "12th St. Oakland City Center" }, 
      { station_abbr: "16th", station_name: "16th St. Mission (SF)" }, 
      { station_abbr: "19th", station_name: "19th St. Oakland" }, 
      { station_abbr: "24th", station_name: "24th St. Mission (SF)" }, 
      { station_abbr: "ashb", station_name: "Ashby (Berkeley)" }, 
      { station_abbr: "antc", station_name: "Antioch" }, 
      { station_abbr: "balb", station_name: "Balboa Park (SF)" }, 
      { station_abbr: "bayf", station_name: "Bay Fair (San Leandro)" }, 
      { station_abbr: "cast", station_name: "Castro Valley" }, 
      { station_abbr: "civc", station_name: "Civic Center (SF)" }, 
      { station_abbr: "cols", station_name: "Coliseum" }, 
      { station_abbr: "colm", station_name: "Colma" }, 
      { station_abbr: "conc", station_name: "Concord" }, 
      { station_abbr: "daly", station_name: "Daly City" }, 
      { station_abbr: "dbrk", station_name: "Downtown Berkeley" }, 
      { station_abbr: "dubl", station_name: "Dublin/Pleasanton" }, 
      { station_abbr: "deln", station_name: "El Cerrito del Norte" }, 
      { station_abbr: "plza", station_name: "El Cerrito Plaza" }, 
      { station_abbr: "embr", station_name: "Embarcadero (SF)" }, 
      { station_abbr: "frmt", station_name: "Fremont" }, 
      { station_abbr: "ftvl", station_name: "Fruitvale (Oakland)" }, 
      { station_abbr: "glen", station_name: "Glen Park (SF)" }, 
      { station_abbr: "hayw", station_name: "Hayward" }, 
      { station_abbr: "lafy", station_name: "Lafayette" }, 
      { station_abbr: "lake", station_name: "Lake Merritt (Oakland)" }, 
      { station_abbr: "mcar", station_name: "MacArthur (Oakland)" }, 
      { station_abbr: "mlbr", station_name: "Millbrae" }, 
      { station_abbr: "mont", station_name: "Montgomery St. (SF)" }, 
      { station_abbr: "nbrk", station_name: "North Berkeley" }, 
      { station_abbr: "ncon", station_name: "North Concord/Martinez" }, 
      { station_abbr: "oakl", station_name: "Oakland Int'l Airport" }, 
      { station_abbr: "orin", station_name: "Orinda" }, 
      { station_abbr: "pitt", station_name: "Pittsburg/Bay Point" }, 
      { station_abbr: "pctr", station_name: "Pittsburg Center" }, 
      { station_abbr: "phil", station_name: "Pleasant Hill" }, 
      { station_abbr: "powl", station_name: "Powell St. (SF)" }, 
      { station_abbr: "rich", station_name: "Richmond" }, 
      { station_abbr: "rock", station_name: "Rockridge (Oakland)" }, 
      { station_abbr: "sbrn", station_name: "San Bruno" }, 
      { station_abbr: "sfia", station_name: "San Francisco Int'l Airport" }, 
      { station_abbr: "sanl", station_name: "San Leandro" }, 
      { station_abbr: "shay", station_name: "South Hayward" }, 
      { station_abbr: "ssan", station_name: "South San Francisco" }, 
      { station_abbr: "ucty", station_name: "Union City" }, 
      { station_abbr: "warm", station_name: "Warm Springs/South Fremont" }, 
      { station_abbr: "wcrk", station_name: "Walnut Creek" }, 
      { station_abbr: "wdub", station_name: "West Dublin" }, 
      { station_abbr: "woak", station_name: "West Oakland" }  

      ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
