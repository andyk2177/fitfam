require("dotenv").config();

module.exports = {
  development: {
    client: "mysql",
    connection: {
      database: "fitfam",
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },
  production: {
    client: "mysql",
    connection: {
      database: "fitfam",
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }
};
