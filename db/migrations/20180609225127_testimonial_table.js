exports.up = function(knex, Promise) {
  return knex.schema.createTable('testimonial', (table) => {
    table.increments();
    table.text('testimonial').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('testimonials')
};
