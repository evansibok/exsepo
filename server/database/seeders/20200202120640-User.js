'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkInsert('Users',
      [
        {
          name: 'Jane Doe',
          email: 'janedoe@example.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Jon Snow',
          email: 'jonsnow@example.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkDelete('Users', null, {});
  }
};
