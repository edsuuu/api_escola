const brycptjs = require('bcryptjs');

module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          nome: 'John Doe',
          email: 'johndoe@teste.com',
          password_hash: await brycptjs.hash('123456', 10),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'John Doe2',
          email: 'johndoe2@teste.com',
          password_hash: await brycptjs.hash('123456', 10),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'John Doe3',
          email: 'johndoe3@teste.com',
          password_hash: await brycptjs.hash('123456', 10),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  // async down() {},
};
