const { Router } = require("express");

const NotesController = require("../controllers/NotesController.js");

const notesRoutes = Router();

const notesController = new NotesController();  // instacia do userController

notesRoutes.get("/", notesController.index);
notesRoutes.post("/:user_id", notesController.create);
notesRoutes.get("/:id", notesController.show);
notesRoutes.delete("/:id", notesController.delete);

module.exports = notesRoutes;  // exportação para quem quiser utilizar o arquivo poder usar