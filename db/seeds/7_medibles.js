exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('medibles').del()
    .then(function () {
      // Inserts seed entries
      return knex('medibles').insert([
        {
            name: 'One Big Badass Brownie',
            img_url: 'https://static.wixstatic.com/media/7026a3_1445f4039f7a4b8ca9fe5c33a05bd133~mv2.png',
            description: '420 Medibles One Big Badass Brownie - 150 mg THC. This Brownie is a great big treat for anyone that loves brownies and edibles. This Treat is packed with 1.5 grams raw cannabis. Produced by MThomas LLC. Scottsdale Arizona. DO NOT USE IF YOU ARE NURSING OR PREGNANT. KEEP OUT OF REACH OF CHILDREN AND ANIMALS.'
        },
        {
            name: 'One Big Badass Krispy Treat - Original',
            img_url: 'https://static.wixstatic.com/media/7026a3_1445f4039f7a4b8ca9fe5c33a05bd133~mv2.png',
            description: '420 Medibles One Big Badass Krispy Treat Original flavor - 150 mg THC. This Krispy Treat is a great big treat for anyone that loves edibles. This Treat is packed with 1.5 grams raw cannabis. Produced by MThomas LLC. Scottsdale Arizona. DO NOT USE IF YOU ARE NURSING OR PREGNANT. KEEP OUT OF REACH OF CHILDREN AND ANIMALS.'
        },
        {
            name: 'One Big Badass Krispy Treat - Fruity Pebbles',
            img_url: 'https://static.wixstatic.com/media/7026a3_1445f4039f7a4b8ca9fe5c33a05bd133~mv2.png',
            description: '420 Medibles One Big Badass Krispy Treat Fruity Pebbles flavor - 150 mg THC. This Krispy Fruity Treat is a great big treat for anyone that loves edibles. This Treat is packed with 1.5 grams raw cannabis. Produced by MThomas LLC. Scottsdale Arizona. DO NOT USE IF YOU ARE NURSING OR PREGNANT. KEEP OUT OF REACH OF CHILDREN AND ANIMALS.'
        },
        {
            name: 'One Big Badass S’More - Original Campfire',
            img_url: 'https://static.wixstatic.com/media/7026a3_1445f4039f7a4b8ca9fe5c33a05bd133~mv2.png',
            description: '420 Medibles One Big Badass S’More Original Campfire flavor - 150mg THC. Remember eating smores as a kid? Well this Big Badass S’More is the “grown-up” version. This Treat is packed with 1.5 grams raw cannabis. Produced by MThomas LLC. Scottsdale Arizona. DO NOT USE IF YOU ARE NURSING OR PREGNANT. KEEP OUT OF REACH OF CHILDREN AND ANIMALS.'
        },
        {
            name: 'One Big Badass Gummy - Sweet & Sour',
            img_url: 'https://static.wixstatic.com/media/7026a3_1445f4039f7a4b8ca9fe5c33a05bd133~mv2.png',
            description: '420 Medibles One Big Badass Gummy Sweet & Sour flavor. Everyone loves gummies, give this this big gummy a try! This Gummy is packed with 1.5 grams raw cannabis. Produced by MThomas LLC. Scottsdale Arizona. DO NOT USE IF YOU ARE NURSING OR PREGNANT. KEEP OUT OF REACH OF CHILDREN AND ANIMALS.'
        },
      ]);
    });
};
