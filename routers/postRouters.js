const express = require("express")

const routers = express.Router()


const postControllers = require("../controllers/postControllers")

//url for all data
routers.get("/", postControllers.getAllData)
routers.get("/:id",postControllers.getSinglePost)
routers.post("/",postControllers.createpost)
routers.patch("/:id",postControllers.updatePost)
routers.delete('/:id',postControllers.deletePost)

module.exports = routers
