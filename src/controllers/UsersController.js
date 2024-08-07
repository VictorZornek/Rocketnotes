const { hash } = require("bcryptjs"); // importação para criptografia de senha
const AppError = require("../utils/AppError.js");
const sqliteConnection = require("../database/sqlite");

/**
 * index - GET para listar vários registros.
 * show - GET para exibir um registro especifico
 * create - POST para criar um registro
 * update - PUT para atualizar um registro
 * delete - DELETE para remover um registro
 */

class UsersController {
    async create(request, response) {
        const { name, email, password } = request.body

        const database = await sqliteConnection();
        const checkUserExists = await database.get("SELECT * FROM users WHERE email = (?)", [email])  // Para inserir variável utilize (?), [nome.variavel]

        if(checkUserExists) {
            throw new AppError('Este e-mail já está em uso.');
        }

        const hashedPassword = await hash(password, 8);  // Para realizar a criptografia inserida pelo usuário - necessário usar await

        // Para realizar a inserção (create) de um usuário no banco de dados
        await database.run("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [name, email, hashedPassword]);

        return response.status(201).json();
    }
}

module.exports = UsersController;