'use strict';

const { generateHash } = require("../utils/encryption");


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('user', [{
        id_user: '27db65f8-8409-43bd-aed9-4e56057d31e7',
        password: generateHash('password'),
        email: 'user1@mail.com',
        first_name: 'user',
        last_name: '1',
     },{
      id_user: 'de878775-dff5-4e52-84ce-d9114abeb4d8',
      password: generateHash('password'),
      email: 'user2@mail.com',
      first_name: 'user',
      last_name: '2',
     },{
      id_user: '12ac2c0e-6142-4de9-8a4e-c7186e4e6ef9',
      password: generateHash('password'),
      email: 'user3@mail.com',
      first_name: 'user',
      last_name: '3',
     }
    ]);
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('user', null, {}); 
  }
};
