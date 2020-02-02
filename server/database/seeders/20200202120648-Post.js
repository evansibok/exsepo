'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Posts',
    [
      {
        userId: 1,
        title: "First title in the series",
        content: "Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        title: "Second foreign title in the series",
        content: "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Posts', null, {});
  }
};
