import mongoose from "mongoose";

mongoose.set("strictQuery", true);

const db = {
  connect: async (): Promise<void> => {
    const dbUrl = process.env.DATABASE_URL;
    if (!dbUrl) {
      throw new Error(
        "DATABASE_URL is not defined in the environment variables"
      );
    }

    try {
      await mongoose.connect(dbUrl);
      console.log("Local DB Connection Successful!");
    } catch (error) {
      console.error("Database connection error:", error);
      process.exit(1); // Exit the process with a failure code if the connection fails.
    }
  },

  disconnect: async (): Promise<void> => {
    try {
      await mongoose.disconnect();
      console.log("DB Connection Closed");
    } catch (error) {
      console.error("Error disconnecting from the database:", error);
    }
  },
};

export default db;
