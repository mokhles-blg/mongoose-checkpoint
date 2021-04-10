// require mongoose

const mongoose = require("mongoose");

// connect the database
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("database is connected");
  } catch (error) {
    console.log(`can not connect ${error}`);
  }
};

module.exports = connectDB;
