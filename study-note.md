//set up git and project procedure
see Reader-Backend Bootcamp - Day4 "advanced API" - "Security" - start from "Initialize the project:"

-
-
- //set up express initial code:
  const express = require("express");
  const app = express();
  const port = process.env.PORT || 4000;

  app.listen(port, () => console.log("listening on port " + port));

-
- //set up Sequelize, Sequelize-cli
  see Reader-Backend Bootcamp - Day4 "advanced API" - "Setup and models"

* How to "Install sequelize, sequelize-cli and pg"?
  @ $ npm install sequelize sequelize-cli
  @ $ npm install pg
  @ $ npx sequelize-cli init

* When set up ElephantSQL, remember to alter two files:(check: Day1 "Databases and ORMs"-"Sequelize ORM"-"Connecting to Database")

1. config/config.json
2. models/index.js

- Example of adding constrains to attributes of a model:
  email: {type: DataTypes.STRING, allowNull: false, unique: true },
