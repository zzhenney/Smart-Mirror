'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.bulkInsert('muni_routes', [
      { id: "F", name: "F-Market & Wharves" },
      { id: "J", name: "J-Church" },
      { id: "KT", name: "KT-Ingleside-Third Street" },
      { id: "L", name: "L-Taraval" },
      { id: "M", name: "M-Ocean View" },
      { id: "N", name: "N-Judah" },
      { id: "NX", name: "NX-Express" },
      { id: "S", name: "S-Shuttle" },
      { id: "1", name: "1-California" },
      { id: "1AX", name: "1AX-California A Express" },
      { id: "1BX", name: "1BX-California B Express" },
      { id: "2", name: "2-Sutter/Clement" },
      { id: "3", name: "3-Jackson" },
      { id: "5", name: "5-Fulton" },
      { id: "5R", name: "5R-Fulton Rapid" },
      { id: "6", name: "6-Haight-Parnassus" },
      { id: "7", name: "7-Haight-Noriega" },
      { id: "7X", name: "7X-Noriega Express" },
      { id: "8", name: "8-Bayshore" },
      { id: "8AX", name: "8AX-Bayshore A Express" },
      { id: "8BX", name: "8BX-Bayshore B Express" },
      { id: "9", name: "9-San Bruno" },
      { id: "9R", name: "9R-San Bruno Rapid" },
      { id: "10", name: "10-Townsend" },
      { id: "12", name: "12-Folsom-Pacific" },
      { id: "14", name: "14-Mission" },
      { id: "14R", name: "14R-Mission Rapid" },
      { id: "14X", name: "14X-Mission Express" },
      { id: "18", name: "18-46th Avenue" },
      { id: "19", name: "19-Polk" },
      { id: "21", name: "21-Hayes" },
      { id: "22", name: "22-Fillmore" },
      { id: "23", name: "23-Monterey" },
      { id: "24", name: "24-Divisadero" },
      { id: "25", name: "25-Treasure Island" },
      { id: "27", name: "27-Bryant" },
      { id: "28", name: "28-19th Avenue" },
      { id: "28R", name: "28R-19th Avenue Rapid" },
      { id: "29", name: "29-Sunset" },
      { id: "30", name: "30-Stockton" },
      { id: "30X", name: "30X-Marina Express" },
      { id: "31", name: "31-Balboa" },
      { id: "31AX", name: "31AX-Balboa A Express" },
      { id: "31BX", name: "31BX-Balboa B Express" },
      { id: "33", name: "33-Ashbury-18th St" },
      { id: "35", name: "35-Eureka" },
      { id: "36", name: "36-Teresita" },
      { id: "37", name: "37-Corbett" },
      { id: "38", name: "38-Geary" },
      { id: "38R", name: "38R-Geary Rapid" },
      { id: "38AX", name: "38AX-Geary A Express" },
      { id: "38BX", name: "38BX-Geary B Express" },
      { id: "39", name: "39-Coit" },
      { id: "41", name: "41-Union" },
      { id: "43", name: "43-Masonic" },
      { id: "44", name: "44-O'Shaughnessy" },
      { id: "45", name: "45-Union-Stockton" },
      { id: "47", name: "47-Van Ness" },
      { id: "48", name: "48-Quintara-24th Street" },
      { id: "49", name: "49-Van Ness-Mission" },
      { id: "52", name: "52-Excelsior" },
      { id: "54", name: "54-Felton" },
      { id: "55", name: "55-16th Street" },
      { id: "56", name: "56-Rutland" },
      { id: "57", name: "57-Parkmerced" },
      { id: "66", name: "66-Quintara" },
      { id: "67", name: "67-Bernal Heights" },
      { id: "76X", name: "76X-Marin Headlands Express" },
      { id: "81X", name: "81X-Caltrain Express" },
      { id: "82X", name: "82X-Levi Plaza Express" },
      { id: "88", name: "88-Bart Shuttle" },
      { id: "714", name: "714-Bart Early Bird" },
      { id: "90", name: "90-San Bruno Owl" },
      { id: "91", name: "91-Owl" },
      { id: "K_OWL", name: "K-Owl" },
      { id: "L_OWL", name: "L-Owl" },
      { id: "M_OWL", name: "M-Owl" },
      { id: "N_OWL", name: "N-Owl" },
      { id: "T_OWL", name: "T-Owl" },
      { id: "PM", name: "PM-Powell-Mason" },
      { id: "PH", name: "PH-Powell-Hyde" },
      { id: "C", name: "C-California Street Cable Car" }

  
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
