exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {order_id: 1, product_id: '1'},
        {order_id: 2, product_id: '2'},
        {order_id: 3, product_id: '3'},
        {order_id: 4, product_id: '4'}
      ]);
    });
};
