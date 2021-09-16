const { Router } = require("express");
const router = new Router();
const User = require("../models").user;

router.get("/", async (request, response, next) => {
  try {
    console.log("inside users route");
    response.send("Show some users");
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
