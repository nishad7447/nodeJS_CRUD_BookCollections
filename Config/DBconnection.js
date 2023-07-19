import mongoose from "mongoose";

// Connecting to the Database
export const connectDB = () => {
  return mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Database connected");
    })
    .catch((err) => {
      console.log(err, "Error connecting to the database");
    });
};
