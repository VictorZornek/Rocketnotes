const sqliteConnection = require('../../sqlite')
const createUsers = require('./createUsers.js');

async function migrationsRun() {
    const schemas = [
        createUsers
    ].join('');

    sqliteConnection().then(db => db.exec(schemas)).catch(error => console.log(error))
}

module.exports = migrationsRun;

// migrations serve para automatizar o processo de recriação de tabela caso seja necessário