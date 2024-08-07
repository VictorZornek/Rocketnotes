const { Router } = require("express");

const UsersController = require("../controllers/UsersController.js");

const usersRoutes = Router();

const usersController = new UsersController()  // instacia do userController

usersRoutes.post("/", usersController.create)
usersRoutes.put("/:id", usersController.update)

module.exports = usersRoutes;  // exportação para quem quiser utilizar o arquivo poder usar