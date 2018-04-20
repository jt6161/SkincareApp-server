exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('orders').del()
    .then(function () {
      // Inserts seed entries
      return knex('orders').insert([
        {product_id: '1', name: 'John', email: 'john@aol.com'},
        {product_id: '2', name: 'Jeff', email: 'jeff@aol.com'},
        {product_id: '3', name: 'Carlos', email: 'carlos@aol.com'},
        {product_id: '4', name: 'Nick', email: 'nick@aol.com'}
      ]);
    });
};
