require("express-async-errors");

const migrationsRun = require("./database/sqlite/migrations"); // importação do banco de dados
const AppError = require("./utils/AppError.js"); // importação do AppError
const express = require('express');  // importação do express
const uploadConfig = require("./configs/upload");

const routes = require("./routes")

migrationsRun(); //para executar o banco de dados

const app = express();  // inicialização do express
app.use(express.json());  // necessário passar o formato de json

app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER))

app.use(routes);


app.use(( error, request, response, next ) => {   // Tratamento quando ocorrer algum tipo de erro
    if(error instanceof AppError) {               // Neste caso, está verificando se é um erro do usuário ou do servidor e devolvendo a resposta conforme o tipo de erro
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        })
    }

    console.error(error)

    return response.status(500).json({
        status: "error",
        message: "Internal server error",
    })
});

const PORT = 3333;  // definir número da porta 
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));


// params são utilizados para dados simples, não utilize-os em informações muito complexas


// controllers -> route -> server