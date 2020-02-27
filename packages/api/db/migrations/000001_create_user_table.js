exports.up = knex => {
  return knex.schema.createTableIfNotExists("user", table => {
    table.charset("utf8");
    table.collate("utf8_unicode_ci");
    table.increments().primary();
    table.string("name").notNullable();
    table
      .string("email")
      .notNullable()
      .unique();
    table.string("password").notNullable();
    table.string("about").notNullable();
    table.enu("role", ["ADMIN", "USER"]).notNullable();
    table
      .boolean("is_active")
      .notNullable()
      .default(true);
    table.timestamps(true, true);
  })
}
  
exports.down = (knex) => knex.schema.dropTable("user")