const { Router } = require("express");

const UsersController = require("../controllers/UsersController.js");

const usersRoutes = Router();

const usersController = new UsersController()  // instacia do userController

usersRoutes.post("/", usersController.create)

module.exports = usersRoutes;  // exportação para quem quiser utilizar o arquivo poder usar