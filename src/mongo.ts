import mongoose from "mongoose";

export function dbConnection() {
  return mongoose.connect(
    "mongodb+srv://database:database@cluster0.2whjq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
}
