
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('admin').del()
    .then(function () {
      // Inserts seed entries
      return knex('admin').insert([
        {id: 1, username: 'marvina420', password: 'leena'},
        {id: 2, username: 'jt6161', password: 'juicy'},
      ]);
    });
};
