import mongoose from "mongoose";

import serverConfig from "./server.config";

export default async function connectToDB() {
    try {
    const MONGODB_URL = serverConfig.MONGODB_URL;
    await mongoose.connect(MONGODB_URL);
    console.log("Connected to DB");
  } catch (error) {
    console.log("Unable to connect to the DB server");
    console.log(error);
  }
}
