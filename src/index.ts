import Express from "express";
import serverConfig from "./config/server.config";
import apiRouter from "./routes";
import connectToDB from "./config/db.config";

const app = Express();
const PORT = serverConfig.PORT;

connectToDB();

app.listen(PORT, () => {
    console.log("Server started on Port:", PORT);
});

app.use("api", apiRouter);