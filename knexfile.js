const path = require("path");

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname, "src", "database", "database.db")  // add caminho do path com resolve()
    },
    pool: {
      afterCreate: (conn, cb) => conn.run("PRAGMA foreign_keys = ON", cb)  // função para que seja habilitado o delete em cascade
    },
    migrations: {
      directory: path.resolve(__dirname, "src", "database", "knex", "migrations")
    },
    useNullAsDefault: true
  }
};
