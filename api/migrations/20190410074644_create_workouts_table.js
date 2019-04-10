exports.up = function(knex, Promise) {
  return knex.schema.createTable("workouts", t => {
    t.increments("id")
      .unsigned()
      .primary();
    t.string("name").notNull();
    t.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("workouts");
};
