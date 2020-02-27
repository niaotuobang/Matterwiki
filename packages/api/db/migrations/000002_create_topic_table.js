exports.up = knex => {
    return knex.schema.createTable("topic", table => {
        table.charset("utf8");
        table.collate("utf8_unicode_ci");
        table.increments().primary();
        table
          .string("name")
          .notNullable()
          .unique();
        table.string("description").notNullable();
        table
          .boolean("is_active")
          .notNullable()
          .defaultTo(true);
        table.timestamps(true, true);
      });
  };
  
  exports.down = (knex) => knex.schema.dropTable("topic")