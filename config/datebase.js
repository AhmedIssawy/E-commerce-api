const mongoose = require("mongoose");
const dbConnection = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.DB_URL || "mongodb://127.0.0.1:27017/e-commerce-api"
    );
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
module.exports = dbConnection;
