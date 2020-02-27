exports.up = knex => {
  return knex.schema.createTableIfNotExists("article_history", table => {
      table.charset("utf8");
      table.collate("utf8_unicode_ci");
      table.increments().primary();
      table.enu("type", ["CREATE", "UPDATE", "DELETE"]).notNullable();
      table
        .integer("article_id")
        .unsigned()
        .references("article.id")
        .notNullable();
      table.string("title");
      table.text("content");
      table.string("change_log");
      table
        .integer("topic_id")
        .unsigned()
        .references("topic.id");
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
    });
  };
  
exports.down = (knex) => knex.schema.dropTable("article_history")