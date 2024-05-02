import { config } from "dotenv";
config();

export default {
    PORT: process.env.PORT,
    MONGODB_URL: process.env.MONGODB_URL || ""
};