const { Router } = require("express");
const router = new Router();
const Image = require("../models").image;

router.get("/", async (request, response, next) => {
  try {
    console.log("inside image route");
    response.send("Show some images");
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
