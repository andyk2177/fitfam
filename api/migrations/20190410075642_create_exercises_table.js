exports.up = function(knex, Promise) {
  return knex.schema.createTable("exercises", t => {
    t.increments("id")
      .unsigned()
      .primary();
    t.bigInteger("workout_id")
      .unsigned()
      .index()
      .notNull();
    t.string("name").notNull();
    t.integer("weight").notNull();
    t.integer("reps").notNull();
    t.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("exercises");
};
