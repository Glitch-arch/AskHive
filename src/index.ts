import bodyParser from "body-parser";
import Express from "express";

import connectToDB from "./config/db.config";
import serverConfig from "./config/server.config";
import apiRouter from "./routes";

const app = Express();
const PORT = serverConfig.PORT;

connectToDB();

// Add express body parser middleware and all.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());


;

app.use("/api", apiRouter);

app.listen(PORT, () => {
    console.log("Server started on Port:", PORT);
});

