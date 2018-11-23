exports.up = function(knex, Promise) {
  return knex.schema.createTable('products', (table) => {
    table.text('product_id').notNullable();
    table.string('name').notNullable();
    table.text('img_url').notNullable();
    table.text('description').notNullable();
    table.float('price').notNullable();
    table.text('url');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('products');
};
