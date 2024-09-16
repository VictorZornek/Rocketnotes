const { Router } = require("express");

const TagsController = require("../controllers/TagsController.js");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const tagsRoutes = Router();

const tagsController = new TagsController();  // instacia do userController

tagsRoutes.get("/", ensureAuthenticated, tagsController.index);


module.exports = tagsRoutes;  // exportação para quem quiser utilizar o arquivo poder usar