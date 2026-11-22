const express = require("express")
const cors = require("cors")
const routers = require("./routers/postRouters")

const app = express();

app.use(express.json())

app.use(cors())

app.use("/api/posts", routers)

module.exports = app


