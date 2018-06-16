exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('thc_products').del()
    .then(function () {
      // Inserts seed entries
      return knex('thc_products').insert([
        {name: 'Canna Body Cream - 4oz', img_url: 'rowValue1', description: 'Our Canna Body Cream is a creamy, moisturizing lotion infused with 300mg THC. Canna lotion can be used daily to hydrate and heal your skin. The cream provides additional health & wellness benefits, such as relief from sore muscles, arthritis, various aches & pains and general skin health. DO NOT USE IF YOU ARE NURSING OR PREGNANT. KEEP OUT OF REACH OF CHILDREN AND ANIMALS.', price: '40.00'},

      ]);
    });
};
