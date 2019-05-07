const knex = require("../db");
const Model = require("objection").Model;

module.exports = class Supplement extends Model {
  static get tableName() {
    return "supplements";
  }
};
