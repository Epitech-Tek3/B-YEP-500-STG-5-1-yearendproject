import { connect } from "mongoose";

/**
 * Connect to MongoDB Atlas
 */
export const connectDB = async () => {
  try {
    await connect("mongodb+srv://root:root@cluster0.l9i01.mongodb.net/area?retryWrites=true&w=majority");
    console.log("MongoDB Connected...");
  } catch (err: any) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};
