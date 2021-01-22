'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('users', [{
       name: 'John Doe',
       email: 'john@gmail.com',
       uuid: '44e35fd2-81cd-4e6e-8c96-cb877042a5e6',
       role: 'super admin',
       createdAt: '2021-01-22T15:02:29.594Z',
       updatedAt: '2021-01-22T15:02:29.594Z',
     },
    {
      name: 'Nath',
      email: 'nath@email.com',
      uuid: '44e35fd2-81cd-4e6e-8c96-cb877043a5e6',
      role: 'super admin',
      createdAt: '2021-01-22T15:02:29.594Z',
      updatedAt: '2021-01-22T15:02:29.594Z',
    }

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
   await queryInterface.bulkDelete('users', null, {});
  }
};
