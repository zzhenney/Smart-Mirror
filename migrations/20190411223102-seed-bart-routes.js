'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.bulkInsert('bart_routes', [
      { id: "1", destination: "SFIA", stations: ["ANTC", "PCTR", "PITT", "NCON", "CONC", "PHIL", "WCRK", "LAFY", "ORIN", "ROCK", "MCAR", "19TH", "12TH", "WOAK", "EMBR", "MONT", "POWL", "CIVC", "16TH", "24TH", "GLEN", "BALB", "DALY", "COLM", "SSAN", "SBRN", "SFIA", "MLBR"] }, 
      { id: "2", destination: "ANTC", stations: ["MLBR", "SFIA", "SBRN", "SSAN", "COLM", "DALY", "BALB", "GLEN", "24TH", "16TH", "CIVC", "POWL", "MONT", "EMBR", "WOAK", "12TH", "19TH", "MCAR", "ROCK", "ORIN", "LAFY", "WCRK", "PHIL", "CONC", "NCON", "PITT", "PCTR", "ANTC"] }, 
      { id: "3", destination: "RICH", stations: ["WARM", "FRMT", "UCTY", "SHAY", "HAYW", "BAYF", "SANL", "COLS", "FTVL", "LAKE", "12TH", "19TH", "MCAR", "ASHB", "DBRK", "NBRK", "PLZA", "DELN", "RICH"] }, 
      { id: "4", destination: "WARM", stations: ["RICH", "DELN", "PLZA", "NBRK", "DBRK", "ASHB", "MCAR", "19TH", "12TH", "LAKE", "FTVL", "COLS", "SANL", "BAYF", "HAYW", "SHAY", "UCTY", "FRMT", "WARM"] }, 
      { id: "5", destination: "DALY", stations: ["WARM", "FRMT", "UCTY", "SHAY", "HAYW", "BAYF", "SANL", "COLS", "FTVL", "LAKE", "WOAK", "EMBR", "MONT", "POWL", "CIVC", "16TH", "24TH", "GLEN", "BALB", "DALY"] }, 
      { id: "6", destination: "WARM", stations: ["DALY", "BALB", "GLEN", "24TH", "16TH", "CIVC", "POWL", "MONT", "EMBR", "WOAK", "LAKE", "FTVL", "COLS", "SANL", "BAYF", "HAYW", "SHAY", "UCTY", "FRMT", "WARM"] }, 
      { id: "7", destination: "MLBR", stations: ["RICH", "DELN", "PLZA", "NBRK", "DBRK", "ASHB", "MCAR", "19TH", "12TH", "WOAK", "EMBR", "MONT", "POWL", "CIVC", "16TH", "24TH", "GLEN", "BALB", "DALY", "COLM", "SSAN", "SBRN", "MLBR"] }, 
      { id: "8", destination: "RICH", stations: ["MLBR", "SBRN", "SSAN", "COLM", "DALY", "BALB", "GLEN", "24TH", "16TH", "CIVC", "POWL", "MONT", "EMBR", "WOAK", "12TH", "19TH", "MCAR", "ASHB", "DBRK", "NBRK", "PLZA", "DELN", "RICH"] }, 
      { id: "9", destination: "MCAR", stations: ["DUBL", "WDUB", "CAST", "BAYF", "SANL", "COLS", "FTVL", "LAKE", "12TH", "19TH", "MCAR"] }, 
      { id: "10", destination: "DUBL", stations: ["MCAR", "19TH", "12TH", "LAKE", "FTVL", "COLS", "SANL", "BAYF", "CAST", "WDUB", "DUBL"] }, 
      { id: "11", destination: "DALY", stations: ["DUBL", "WDUB", "CAST", "BAYF", "SANL", "COLS", "FTVL", "LAKE", "WOAK", "EMBR", "MONT", "POWL", "CIVC", "16TH", "24TH", "GLEN", "BALB", "DALY"] }, 
      { id: "12", destination: "DUBL", stations: ["DALY", "BALB", "GLEN", "24TH", "16TH", "CIVC", "POWL", "MONT", "EMBR", "WOAK", "LAKE", "FTVL", "COLS", "SANL", "BAYF", "CAST", "WDUB", "DUBL"] }, 
      { id: "13", destination: "SFIA", stations: ["MLBR", "SFIA"] }, 
      { id: "14", destination: "MLBR", stations: ["SFIA", "MLBR"] }, 
      { id: "19", destination: "COLS", stations: ["OAKL", "COLS"] }, 
      { id: "20", destination: "OAKL", stations: ["COLS", "OAKL"] }  
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
