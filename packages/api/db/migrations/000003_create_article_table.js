exports.up = knex => {
    return knex.schema.createTableIfNotExists("article", table => {
        table.charset("utf8");
        table.collate("utf8_unicode_ci");
        table.increments().primary();
        table.string("title").notNullable();
        table.text("content").notNullable();
        table.string("change_log").notNullable();
        table
          .integer("topic_id")
          .unsigned()
          .references("topic.id")
          .notNullable();
        table
          .integer("created_by_id")
          .unsigned()
          .references("user.id");
        table
          .integer("modified_by_id")
          .unsigned()
          .references("user.id");
        table
          .boolean("is_active")
          .notNullable()
          .defaultTo(true);
        table.timestamps(true, true);
    })
};
  
exports.down = (knex) => knex.schema.dropTable("article")