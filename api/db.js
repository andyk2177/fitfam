const Knex = require("knex");
const knexConfig = require("./knexfile");
const { Model } = require("objection");

const knex = Knex(
  process.env.NODE_ENV === "production"
    ? knexConfig.production
    : knexConfig.development
);

Model.knex(knex);

module.exports = knex;
