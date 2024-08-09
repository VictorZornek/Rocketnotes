const { Router } = require("express");

const NotesController = require("../controllers/NotesController.js");

const notesRoutes = Router();

const notesController = new NotesController()  // instacia do userController

notesRoutes.post("/:user_id", notesController.create)

module.exports = notesRoutes;  // exportação para quem quiser utilizar o arquivo poder usar