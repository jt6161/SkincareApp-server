exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('thcproducts').del()
    .then(function() {
      // Inserts seed entries
      return knex('thcproducts').insert([
        {
          name: '420 Skincare - Starter Pack',
          img_url: 'https://static.wixstatic.com/media/7026a3_38ac4e0fa5d04bb3bf7a1f68f1b6b7c9~mv2_d_5184_3456_s_4_2.jpg',
          description: 'A great way for patients to experience the line together, our 420 Skincare Starter Pack includes 1 small Canna Soap bar, 1 small Canna Bath Bomb and 1 oz. Canna Lotion all in a decorative bowl. DO NOT USE IF YOU ARE NURSING OR PREGNANT. KEEP OUT OF REACH OF CHILDREN AND ANIMALS.'
        },
        {
          name: 'Canna Bath Bomb Twin Pack',
          img_url: 'https://static.wixstatic.com/media/7026a3_f9c8130bad344062a54fc778e4ef6b7f~mv2_d_5184_3456_s_4_2.jpg',
          description: 'Fill your bathtub with hot water, drop in your one of your Canna Bombs and watch as it releases its Therapeutic Powers. THC Canna Bombs are a hard-packed mixture of dry natural ingredients that fizzes up when wet. More than just a cute round ball, our THC Canna Bombs have significant medical uses for pain, sore joints or just dry skin. Our Canna Bombs will have you, not only feeling pain free, but also relaxed! DO NOT USE IF YOU ARE NURSING OR PREGNANT. KEEP OUT OF REACH OF CHILDREN AND ANIMALS.'
        },
        {
          name: 'Canna Lotion Cream',
          img_url: 'https://static.wixstatic.com/media/7026a3_f0c48a45abda49afa824e6918469e7e4~mv2.jpg',
          description: 'Our Canna Lotion Cream is a creamy, moisturizing lotion infused with 300mg THC. Canna lotion can be used daily to hydrate and heal your skin. The cream provides additional health & wellness benefits, such as relief from sore muscles, arthritis, various aches & pains and general skin health. DO NOT USE IF YOU ARE NURSING OR PREGNANT. KEEP OUT OF REACH OF CHILDREN AND ANIMALS.'
        },
        {
          name: 'Canna Body Butter',
          img_url: 'https://static.wixstatic.com/media/7026a3_84d138f7e4ff44a097a179fa3beee52a~mv2.jpg',
          description: 'Our Canna Body Butter is a thick, moisture-rich body butter infused with 300mg THC. The luxurious formula penetrates deeply to replenish moisture and strengthen skin. This topical provides relief for sore muscles, arthritis and various aches & pains. It is also been known to help heal certain skin irritations. DO NOT USE IF YOU ARE NURSING OR PREGNANT. KEEP OUT OF REACH OF CHILDREN AND ANIMALS.'
        },
        {
          name: 'Canna Bath Salts',
          img_url: 'https://static.wixstatic.com/media/7026a3_8a2669b32e334a669f5cb4e479717e36~mv2_d_5184_3456_s_4_2.jpg',
          description: 'Fill your bathtub with hot water, drop your Canna Bath Salts and watch as it releases its Therapeutic Powers. THC Canna Bath Salts are a mixture of dry natural ingredients that fizzes up when wet. More than just a cute round ball, our THC Canna Bath Salts have significant medical uses for muscle pain, sore joints or just dry skin. Our Canna Bath Salts will have you, not only feeling pain free, but also relaxed! DO NOT USE IF YOU ARE NURSING OR PREGNANT. KEEP OUT OF REACH OF CHILDREN AND ANIMALS.'
        },
        {
          name: 'CannaSoap Bar',
          img_url: 'https://static.wixstatic.com/media/7026a3_ce5c386252be4ba6ba368e2c13e47397~mv2_d_5184_3456_s_4_2.jpg',
          description: 'Feel the rejuvenating benefits of cannabis with our all natural, hand-crafted CannaSoap! Made with the best ingredients and purest isolate, your skin and body will thank you for cleansing with this high quality product! DO NOT USE IF YOU ARE NURSING OR PREGNANT. KEEP OUT OF REACH OF CHILDREN AND ANIMALS.'
        },
        {
          name: 'Canna Bath Dust',
          img_url: 'https://static.wixstatic.com/media/7026a3_c60ef375c580401a90da306dc964737c~mv2_d_5184_3456_s_4_2.jpg',
          description: 'Fill your bathtub with hot water, drop your Canna Bath Dust and watch as it releases its Therapeutic Powers. THC Canna Bath Dust is a mixture of dry natural ingredients that fizzes up when wet. More than just a cute round ball, our THC Canna Bath Dust has significant medical uses for pain, sore joints or just dry skin. Our Canna Bath Dust will have you, not only feeling pain free, but also relaxed! DO NOT USE IF YOU ARE NURSING OR PREGNANT. KEEP OUT OF REACH OF CHILDREN AND ANIMALS.'
        },
        {
          name: 'Egyptian Luver',
          img_url: 'https://static.wixstatic.com/media/7026a3_3b4617c267a241e5b076b07e18823d77~mv2.jpg',
          description: 'From the creators of 420 Skincare, Egyptian Luver Erotica Cream is the perfect topical for female patients seeking to add a little spice to their lives. DO NOT USE IF YOU ARE NURSING OR PREGNANT. KEEP OUT OF REACH OF CHILDREN AND ANIMALS.'
        },
      ]);
    });
};
