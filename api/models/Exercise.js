const knex = require("../db");
const Model = require("objection").Model;

module.exports = class Exercise extends Model {
  static get tableName() {
    return "exercises";
  }
};
