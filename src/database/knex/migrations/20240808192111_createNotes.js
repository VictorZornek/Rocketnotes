// para realizar a criação desse file, utilize no terminal o comando abaixo:
// npx knex migrate:make createNotes

exports.up = knex => knex.schema.createTable("notes", table => {  // up -> processo de criar a tabela
    table.increments("id");
    table.text("title");
    table.text("description");
    table.integer("user_id").references("id").inTable("users");  // obriga a criação da nota estar vinculada com algum usuário

    table.timestamp("created_at").default(knex.fn.now());
    table.timestamp("updated_at").default(knex.fn.now());
});

exports.down = knex => knex.schema.dropTable("notes"); // down -> processo de deletar a tabela


// Criação de uma tabela utilizando ORM, para que seja possível criar tabela independente do banco de dados utilizado

// Para rodar essa migration, utilize no terminal uma das opções abaixo:
// 1- npx knex migrate:latest
// 2- alteração no script do package.json: npm run migrate