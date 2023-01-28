const express = require("express");
const BmiRouter = express.Router();
BmiRouter.post("/", async (req, res) => {
  const { weight, height } = req.body;
  if (height == Number(height)) {
    var heightInMeters = height * 0.3048;
    var bmi = weight / (heightInMeters * heightInMeters);
    return res.status(200).send({ bmi: bmi });
  }
  return res.status(401).send("Please provide valid Input");
});
module.exports = BmiRouter;
