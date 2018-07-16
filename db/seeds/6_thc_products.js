exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('thcproducts').del()
    .then(function () {
      // Inserts seed entries
      return knex('thcproducts').insert([
        {name: 'Canna Body Cream', img_url: 'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/29695095_2017200108598435_6057389104230825984_n.jpg?_nc_cat=0&oh=f3611ec9d3ac2cc818eedec7f7494097&oe=5B528261', description: 'Our Canna Body Cream is a creamy, moisturizing lotion infused with 300mg THC. Canna lotion can be used daily to hydrate and heal your skin. The cream provides additional health & wellness benefits, such as relief from sore muscles, arthritis, various aches & pains and general skin health. DO NOT USE IF YOU ARE NURSING OR PREGNANT. KEEP OUT OF REACH OF CHILDREN AND ANIMALS.'},
        {name: 'Canna Body Butter', img_url: 'https://scontent.fphx1-1.fna.fbcdn.net/v/t1.0-9/31225138_10156315166967236_1786995132902408192_n.jpg?_nc_cat=0&oh=312340317b428fcef11fc4cdf835e17c&oe=5B9FEB50', description: 'Our Canna Body Cream is a creamy, moisturizing lotion infused with 300mg THC. Canna lotion can be used daily to hydrate and heal your skin. The cream provides additional health & wellness benefits, such as relief from sore muscles, arthritis, various aches & pains and general skin health. DO NOT USE IF YOU ARE NURSING OR PREGNANT. KEEP OUT OF REACH OF CHILDREN AND ANIMALS.'},
        {name: 'Canna Bath Bombs', img_url: 'https://scontent.fphx1-1.fna.fbcdn.net/v/t1.0-9/31265298_10156315167077236_6022709068676726784_n.jpg?_nc_cat=0&oh=b7550ce222d528a7c72b024686dafd7d&oe=5BE43D85', description: 'Fill your bathtub with hot water, drop your Canna Bomb and watch as it releases its Therapeutic Powers. THC Canna Bombs are a hard-packed mixture of dry natural ingredients that fizzes up when wet. More than just a cute round ball, our THC Canna Bombs have significant medical uses for pain, sore joints or just dry skin. Our Canna Bombs will have you, not only feeling pain free, but also relaxed! DO NOT USE IF YOU ARE NURSING OR PREGNANT. KEEP OUT OF REACH OF CHILDREN AND ANIMALS.'},
        {name: 'CannaSoap Bar', img_url: 'https://scontent.fphx1-1.fna.fbcdn.net/v/t1.0-9/31224764_10156315167182236_2786291279443525632_n.jpg?_nc_cat=0&oh=44540388ab0aefc5aa0bc264c42faeb1&oe=5BC97B01', description: 'Feel the rejuvenating benefits of cannabis with our all natural, hand-crafted CannaSoap! Made with the best ingredients and purest isolate, your skin and body will thank you for cleansing with this high quality product! DO NOT USE IF YOU ARE NURSING OR PREGNANT. KEEP OUT OF REACH OF CHILDREN AND ANIMALS.'},
        {name: 'Egyptian Luver', img_url: 'https://scontent.fphx1-1.fna.fbcdn.net/v/t1.0-9/31250572_10156315166502236_3943048413184000000_n.jpg?_nc_cat=0&oh=c39d5dd737a55aca8c0639ae490df97d&oe=5BE13CBA', description: 'From the creators of 420 Skincare, Egyptian Luver Erotica Cream is the perfect topical for female patients seeking to add a little spice to their lives. DO NOT USE IF YOU ARE NURSING OR PREGNANT. KEEP OUT OF REACH OF CHILDREN AND ANIMALS.'},
        {name: '420 Skincare - Starter Pack', img_url: 'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/29695095_2017200108598435_6057389104230825984_n.jpg?_nc_cat=0&oh=f3611ec9d3ac2cc818eedec7f7494097&oe=5B528261', description: 'A great way for patients to experience the line together, our 420 Starter Pack includes 1 small Canna Soap bar, 1 small Canna Bath Bomb and 1 oz. Canna Lotion all in a decorative bowl. DO NOT USE IF YOU ARE NURSING OR PREGNANT. KEEP OUT OF REACH OF CHILDREN AND ANIMALS.'}
      ]);
    });
};
