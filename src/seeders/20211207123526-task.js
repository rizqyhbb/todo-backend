'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('task', [{
      id_task: "bdd17951-0aa5-4d0f-82de-267fa0b8f61f",
      id_user: "27db65f8-8409-43bd-aed9-4e56057d31e7",
      task:"helping my neighbour"
     },{
      id_task: "6f1b3de2-d068-4f54-b23b-34a0584da0f1",
      id_user: "27db65f8-8409-43bd-aed9-4e56057d31e7",
      task:"water the garden"
     },{
      id_task: "78351527-d465-4c21-9e2e-e75988dd26c6",
      id_user: "de878775-dff5-4e52-84ce-d9114abeb4d8",
      task:"car maintenance"
     },{
      id_task: "3f41c461-d3f4-4c2a-9a8c-63e086d3fc30",
      id_user: "de878775-dff5-4e52-84ce-d9114abeb4d8",
      task:"pay the bill"
     }
    ]);

  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkDelete('task', null, {});
     
  }
};
