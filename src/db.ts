import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config({ path: "/config/config.env" });

const MONGO_URI = process.env.MONGO_URI;

export default async function connectDB() {
  const conn = await mongoose.connect(MONGO_URI);
  console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline.bold);
}
