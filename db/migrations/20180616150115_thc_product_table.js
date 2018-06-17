exports.up = function(knex, Promise) {
  return knex.schema.createTable('thcproducts', (table) => {
    table.increments();
    table.string('name').notNullable();
    table.text('img_url').notNullable();
    table.text('description').notNullable();
    table.float('price').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('thcproducts');
};
