import dotenv from "dotenv";
const mongoose = require("mongoose");

dotenv.config();
// main().catch((err) => console.log(err));

async function main() {
  try {
    mongoose.connect(process.env.MONGO).then(() => {
      console.log("connection established");
    });
    // console.log("Mongo Database Connected");
  } catch (error) {
    console.log(error, "Mongo connection error");
  }
}

export default main;
