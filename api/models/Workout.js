const knex = require("../db");
const Model = require("objection").Model;
const Exercise = require("../models/Exercise");

module.exports = class Workout extends Model {
  static get tableName() {
    return "workouts";
  }

  static get relationMappings() {
    return {
      exercises: {
        relation: Model.HasManyRelation,
        modelClass: Exercise,
        join: {
          from: "workouts.id",
          to: "exercises.workout_id"
        }
      }
    };
  }
};
