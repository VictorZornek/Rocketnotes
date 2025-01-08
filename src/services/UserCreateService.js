const { hash } = require("bcryptjs");
const AppError = require("../utils/AppError.js");

class UserCreateService {

    constructor(userRepository) {  // o construtor é da class, por isso deve ficar no nível da class e não no da função
        this.userRepository = userRepository
    }

    async execute({ name, email, password }) {

        const checkUserExists = await this.userRepository.findByEmail(email)

        if(checkUserExists) {
            throw new AppError('Este e-mail já está em uso.');
        }

        const hashedPassword = await hash(password, 8);  // Para realizar a criptografia inserida pelo usuário - necessário usar await

        await this.userRepository.create({ name, email, password: hashedPassword })
    }

}

module.exports = UserCreateService;