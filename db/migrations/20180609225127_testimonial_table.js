exports.up = function(knex, Promise) {
  return knex.schema.createTable('testimonials', (table) => {
    table.increments();
    table.text('review').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('testimonials')
};
