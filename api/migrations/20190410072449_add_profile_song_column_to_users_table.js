exports.up = function(knex, Promise) {
  return knex.schema.table("users", function(t) {
    t.text("profile_song");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table("users", function(t) {
    t.dropColumn("profile_song");
  });
};
