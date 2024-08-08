exports.up = knex => knex.schema.createTable("tags", table => {  // up -> processo de criar a tabela
    table.increments("id");
    table.text("name").notNullable(); // para não aceitar valor null

    table.integer("note_id").references("id").inTable("notes").onDelete("CASCADE");  // onDelete("CASCADE") serve para deletar a tag automaticamente se a nota for deletada
    table.integer("user_id").references("id").inTable("users");
});

exports.down = knex => knex.schema.dropTable("tags"); // down -> processo de deletar a tabela