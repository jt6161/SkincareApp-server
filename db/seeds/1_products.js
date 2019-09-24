exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('products').del().then(function() {
    // Inserts seed entries
    return knex('products').insert([
      {
        name: 'CBD Bath Soak',
        img_url: 'https://static.wixstatic.com/media/7026a3_f24287afe1924a359a34156337074841~mv2_d_3456_2304_s_2.jpg',
        description: 'Scoop some 420 Skincare CBD Bath Salts in your tub and relax! Our bath salts are excellent, not only for relaxation and muscle relief but also for skin health and detoxification. The following ingredients work with CBD for the ultimate bath salt experience. Epson Salt, which absorbs through the skin to help flush toxins and help promote relaxation. White clay which assists in detoxification and purification of the skin and underlying issues. Sweet almond oil, which provides beneficial nutrients and vitamins. All bath bombs are hand-crafted and will, therefore, vary in appearance. Choose from 3 different scents! This product complies with all FDA standards and is not meant to diagnose, treat, cure or maintain any ailments or diseases in accordance with FDA guidelines.',
        price: '23.99'
      }, {
        name: 'CBD Bath Bomb Dust',
        img_url: 'https://static.wixstatic.com/media/7026a3_77d985a2397b4379985fbfe73ad0e940~mv2_d_2304_3456_s_2.jpg',
        description: 'Scoop some 420 Skincare CBD Bath Bomb Dust in your tub and watch it fizz! Our bath salts are excellent, not only for relaxation, but also for skin health and detoxification. The following ingredients work with CBD for the ultimate bath bomb experience. Epson Salt, which absorbs through the skin to help flush toxins and help promote relaxation. White clay which assists in detoxification and purification of the skin and underlying issues. Sweet almond oil, which provides beneficial nutrients and vitamins. All bath bombs are hand-crafted and will, therefore, vary in appearance. Choose from 3 different scents! This product complies with all FDA standards and is not meant to diagnose, treat, cure or maintain any ailments or diseases in accordance with FDA guidelines.',
        price: '23.99'
        }, {
        name: 'CBD Body Cream - 300mg ',
        img_url: 'https://static.wixstatic.com/media/7026a3_0239c4baea204d56b469d536bee7f1ea~mv2_d_2000_2000_s_2.jpg',
        description: '420 Skincare 4oz CBD Organic Skin Lotion is scientifically formulated to go on smooth and leave no oily residue! Used by massage therapists and by those with fibromyalgia, eczema, liver spots and other skin ailments, our CBD Body Cream formula is praised for being fast acting and long lasting. This product complies with all FDA standards and is not meant to diagnose, treat, cure or maintain any ailments or diseases in accordance with FDA guidelines.',
        price: '43.99'
        }, {
        name: 'CBD Body Cream - 1000mg ',
        img_url: 'https://static.wixstatic.com/media/7026a3_0239c4baea204d56b469d536bee7f1ea~mv2_d_2000_2000_s_2.jpg',
        description: '420 Skincare 4oz CBD Organic Skin Lotion is scientifically formulated to go on smooth and leave no oily residue! Used by massage therapists and by those with fibromyalgia, eczema, liver spots and other skin ailments, our CBD Body Cream formula is praised for being fast acting and long lasting. This product complies with all FDA standards and is not meant to diagnose, treat, cure or maintain any ailments or diseases in accordance with FDA guidelines.',
        price: '79.99'
        }, {
          name: 'CBD Body Butter - 300mg ',
        img_url: 'https://static.wixstatic.com/media/7026a3_e85048fddca449dcbb6550ca3ed22eef~mv2_d_2000_2000_s_2.jpg',
        description: 'With a thicker consistency than body cream, 420 Skincare CBD body butter is a "Skin Super Food" that is crafted from seeds found in the fruit of the Shea tree. Naturally rich in vitamins, our CBD body butter provides the skin with essential fatty acids and nutrients necessary for the collagen production. 420 SkinCare 4oz CBD body butter also provides relief from sore joints, rashes circulation, sunburns, arthritis, chronic pain, psoriasis and lupus. This product complies with all FDA standards and is not meant to diagnose, treat, cure or maintain any ailments or diseases in accordance with FDA guidelines.',
        price: '43.99'
        }, {
          name: 'CBD Body Butter - 1000mg ',
        img_url: 'https://static.wixstatic.com/media/7026a3_e85048fddca449dcbb6550ca3ed22eef~mv2_d_2000_2000_s_2.jpg',
        description: 'With a thicker consistency than body cream, 420 Skincare CBD body butter is a "Skin Super Food" that is crafted from seeds found in the fruit of the Shea tree. Naturally rich in vitamins, our CBD body butter provides the skin with essential fatty acids and nutrients necessary for the collagen production. 420 SkinCare 4oz CBD body butter also provides relief from sore joints, rashes circulation, sunburns, arthritis, chronic pain, psoriasis and lupus. This product complies with all FDA standards and is not meant to diagnose, treat, cure or maintain any ailments or diseases in accordance with FDA guidelines.',
        price: '43.99'
        }, {
        name: 'CBD Soap',
        img_url: 'https://static.wixstatic.com/media/7026a3_b17a842c8e14420f8dc84a9871b9955a~mv2_d_2861_1924_s_2.jpg',
        description: '420 Skincare 100% natural and organic CBD soap is perfectly suited for sensitive skin. Our soap is deliciously aromatic and has medicinal properties provided by the cannabis plant, making it an excellent choice for people who live a healthy lifestyle and only want the best for their bodies. Choose your favorite scent! This product complies with all FDA standards and is not meant to diagnose, treat, cure or maintain any ailments or diseases in accordance with FDA guidelines.',
        price: '10.99'
      }, {
        name: 'CBD Bath Bomb - Twin Pack',
        img_url: 'https://static.wixstatic.com/media/7026a3_0b89fde772054456b6075a76862efb82~mv2_d_3456_2304_s_2.jpg',
        description: 'Drop a 420 Skincare CBD bath bomb in your tub and watch it fizz! Our bath bombs twin packs are excellent, not only for relaxation, but also for skin health and detoxification. The following ingredients work with CBD for the ultimate bath bomb experience. Epson Salt, which absorbs through the skin to help flush toxins and help promote relaxation. White clay which assists in detoxification and purification of the skin and underlying issues. Sweet almond oil, which provides beneficial nutrients and vitamins. All bath bombs are hand-crafted and will, therefore, vary in appearance. Choose your favorie scents. This product complies with all FDA standards and is not meant to diagnose, treat, cure or maintain any ailments or diseases in accordance with FDA guidelines.',
        price: '23.99'
      },
      {
        name: 'CBD Tincture',
        img_url: 'https://static.wixstatic.com/media/7026a3_a6307231615e43709b2882ec7381f780~mv2_d_3024_4032_s_4_2.jpeg',
        description: 'CBD Tincture naturally-prepared with Black Seed Oil and can provide a variety of potentially beneficial cannabinoids. 500mg 1oz This product complies with all FDA standards and is not meant to diagnose, treat, cure or maintain any ailments or diseases in accordance with FDA guidelines.',
        price: '79.99'
      },
      {
        name: 'CBD Bath Bomb & Body Butter Combo',
        img_url: 'https://static.wixstatic.com/media/7026a3_3f06e5977b7b41e79efb0b3ebfe7c0e9~mv2_d_4956_4956_s_4_2.jpg',
        description: 'Drop a 420 Skincare CBD bath bomb in your tub and watch it fizz! Our bath bombs twin packs are excellent, not only for relaxation, but also for skin health and detoxification. The following ingredients work with CBD for the ultimate bath bomb experience. Epson Salt, which absorbs through the skin to help flush toxins and help promote relaxation. White clay which assists in detoxification and purification of the skin and underlying issues. Sweet almond oil, which provides beneficial nutrients and vitamins. All bath bombs are hand-crafted and will, therefore, vary in appearance. Choose your favorie scents.With a thicker consistency than body cream, 420 SkinCares CBD body butter is a Skin Super Food that is crafted from seeds found in the Shea tree fruit. Naturally rich in vitamins, our CBD body butter provides the skin with essential fatty acids and nutrients necessary for the collagen production. 420 SkinCare CBD body butter also provides relief from sore joints, rashes circulation, sunburns, arthritis, chronic pain, psoriasis and lupus. This product complies with all FDA standards and is not meant to diagnose, treat, cure or maintain any ailments or diseases in accordance with FDA guidelines.',
        price: '65.98'
      }
    ]);
  });
};
