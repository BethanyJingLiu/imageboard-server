"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "images",
      [
        {
          title: "Mesmerizing dancer",
          url: "https://images.pexels.com/photos/1886694/pexels-photo-1886694.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Beautiful woman hiding half of her face",
          url: "https://images.pexels.com/photos/805367/pexels-photo-805367.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Naughty girl sitting on the roof reading",
          url: "https://images.pexels.com/photos/206585/pexels-photo-206585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Stunning waterfall",
          url: "https://images.pexels.com/photos/68147/waterfall-thac-dray-nur-buon-me-thuot-daklak-68147.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Beautiful scenery like a dreamy watercolor painting",
          url: "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Lavender field",
          url: "https://images.pexels.com/photos/464336/pexels-photo-464336.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Simply Amsterdam Canal",
          url: "https://images.pexels.com/photos/1258865/pexels-photo-1258865.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Dutch traditional wooden shoes",
          url: "https://images.pexels.com/photos/615328/shoes-wood-tree-holland-615328.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Cozy shop in the Netherlands",
          url: "https://images.pexels.com/photos/7214861/pexels-photo-7214861.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Music is my favorite",
          url: "https://images.pexels.com/photos/7149165/pexels-photo-7149165.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Feels like a star",
          url: "https://images.pexels.com/photos/2531728/pexels-photo-2531728.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("images", null, {});
  },
};
