exports.up = function(knex, Promise) {
  return knex.schema.createTable("supplements", t => {
    t.increments("id")
      .unsigned()
      .primary();
    t.string("name").notNull();
    t.string("link").notNull();
    t.string("photo").notNull;
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("supplements");
};
