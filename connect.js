const mongoose = require("mongoose");
const connect = () => {
  return mongoose.connect(
    "mongodb+srv://sample1:sample1@cluster0.ixjqb0n.mongodb.net/?retryWrites=true&w=majority"
  );
};
module.exports = connect;
