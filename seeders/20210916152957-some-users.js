"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          email: "bethany.liu2011@gmail.com",
          password: "12345",
          fullName: "Bethany Jing Liu",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "liu1963nl@gmail.com",
          password: "54321",
          fullName: "Awen Liu",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "bestmama@gmail.com",
          password: "0000",
          fullName: "Athena Wong",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "bestbaba@gmail.com",
          password: "0000",
          fullName: "John Liu",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
