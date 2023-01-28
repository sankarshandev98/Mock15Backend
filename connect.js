const mongoose = require("mongoose");
const connect = () => {
  return mongoose.connect(
    "mongodb+srv://bmi:bmi@cluster0.vy9cjwx.mongodb.net/?retryWrites=true&w=majority"
  );
};
module.exports = connect;
