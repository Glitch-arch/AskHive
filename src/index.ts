import Express from "express";
import serverConfig from "./config/server.config"
const app = Express()

const PORT = serverConfig.PORT

app.listen(PORT, () => {
    console.log("Server started on Port:", PORT)
})