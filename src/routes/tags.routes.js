const { Router } = require("express");

const TagsController = require("../controllers/TagsController.js");

const tagsRoutes = Router();

const tagsController = new TagsController();  // instacia do userController

tagsRoutes.get("/:user_id", tagsController.index);


module.exports = tagsRoutes;  // exportação para quem quiser utilizar o arquivo poder usar