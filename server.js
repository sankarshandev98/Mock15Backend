const express = require("express");
const mongoose = require("mongoose");
const User = require("./model/user.model");
const cors = require("cors");
const connect = require("./connect");
const req = require("express/lib/request");
const userRouter = require("./controller/user.router");
const BmiRouter = require("./controller/bmi.router");
const PORT = process.env.PORT || 8000;
mongoose.set("strictQuery", true);
const server = express();
server.use(express.json());
server.use(cors());

server.get("/", async (req, res) => {
  res.status(200).send("Hello Welcome to my server");
});
server.use("/user", userRouter);
server.use("/bmi", BmiRouter);
server.post("/", async (req, res) => {
  const user = req.body;
  console.log(user);
  const data = await User.create(user);
  res.status(200).send({ message: "data added successfully", data: data });
});
server.listen(PORT, async () => {
  await connect();
  console.log(`Database Connected and server listening on port ${PORT}`);
});
