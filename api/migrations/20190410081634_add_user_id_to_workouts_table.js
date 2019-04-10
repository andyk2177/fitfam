exports.up = function(knex, Promise) {
  return knex.schema.table("workouts", function(t) {
    t.bigInteger("user_id")
      .unsigned()
      .index()
      .notNull();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table("workouts", function(t) {
    t.dropColumn("user_id");
  });
};
