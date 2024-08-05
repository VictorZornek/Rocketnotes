const express = require('express');  // importação do express

const routes = require("./routes")


const app = express();  // inicialização do express
app.use(express.json());  // necessário passar o formato de json

app.use(routes);

const PORT = 3333;  // definir número da porta 
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));


// params são utilizados para dados simples, não utilize-os em informações muito complexas


// controllers -> route -> server