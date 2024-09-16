const { Router } = require("express");

const UsersController = require("../controllers/UsersController.js");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const usersRoutes = Router();

const usersController = new UsersController()  // instacia do userController

usersRoutes.post("/", usersController.create)
usersRoutes.put("/", ensureAuthenticated, usersController.update)

module.exports = usersRoutes;  // exportação para quem quiser utilizar o arquivo poder usar