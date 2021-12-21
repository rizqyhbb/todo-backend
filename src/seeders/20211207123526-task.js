'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('task', [{
      id_task: "bdd17951-0aa5-4d0f-82de-267fa0b8f61f",
      id_user: "27db65f8-8409-43bd-aed9-4e56057d31e7",
      todo:"helping my neighbour",
      complete: false
     },{
      id_task: "6f1b3de2-d068-4f54-b23b-34a0584da0f1",
      id_user: "27db65f8-8409-43bd-aed9-4e56057d31e7",
      todo:"water the garden",
      complete: false,
     },{
      id_task: "78351527-d465-4c21-9e2e-e75988dd26c6",
      id_user: "de878775-dff5-4e52-84ce-d9114abeb4d8",
      todo:"car maintenance",
      complete: true,
     },{
      id_task: "3f41c461-d3f4-4c2a-9a8c-63e086d3fc30",
      id_user: "de878775-dff5-4e52-84ce-d9114abeb4d8",
      todo:"pay the bill",
      complete: true
      
     }
    ]);

  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkDelete('task', null, {});
     
  }
};
