exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('products').del().then(function() {
    // Inserts seed entries
    return knex('products').insert([
      {
        name: 'CBD Bath Soak',
        img_url: 'https://static.wixstatic.com/media/7026a3_f24287afe1924a359a34156337074841~mv2_d_3456_2304_s_2.jpg',
        description: 'Did you know that the Egyptians were well-known for their use of essential oils both medically and cosmetically? 420 CBD Bath Soak 200mg 16oz expands on this Egyptian wisdom by combining essential oils with CBD and seal salt to take your self-care routine to the next level!
        Our bath soak is excellent, not only for relaxation, but also for skin health and detoxification. The following ingredients work with CBD for the ultimate bath salt experience. Epson Salt, which absorbs through the skin to help flush toxins and help promote relaxation. White clay which assists in detoxification and purification of the skin and underlying issues. Sweet almond oil, which provides beneficial nutrients and vitamins. This product complies with all FDA standards and is not meant to diagnose, treat, cure or maintain any ailments or diseases in accordance with FDA guidelines.',
        price: '24.99'
      }, {
        name: 'CBD Bath Dust',
        img_url: 'https://static.wixstatic.com/media/7026a3_77d985a2397b4379985fbfe73ad0e940~mv2_d_2304_3456_s_2.jpg',
        description: 'Drop some 420 Skincare CBD Bath Dust in your tub and watch it fizz! Our Bath Dust 200mg 16oz jar is excellent, not only for relaxation, but also for skin health and detoxification. The following ingredients work with CBD for the ultimate bath bomb experience. Epson Salt , which absorbs through the skin to help flush toxins and help promote relaxation. White clay which assists in detoxification and purification of the skin and underlying issues. Sweet almond oil, which provides beneficial nutrients and vitamins. All bath bombs are hand-crafted and will, therefore, vary in appearance. This product complies with all FDA standards and is not meant to diagnose, treat, cure or maintain any ailments or diseases in accordance with FDA guidelines. ',
        price: '24.99'
        },  {
        name: 'CBD Body Butter - 100mg',
        img_url: 'https://static.wixstatic.com/media/7026a3_0239c4baea204d56b469d536bee7f1ea~mv2_d_2000_2000_s_2.jpg',
        description: 'With a thicker consistency than body cream, 420 Skincares CBD body butter is a Skin Super Food that is crafted from seeds found in the Shea tree fruit. Naturally rich in vitamins, our CBD body butter provides the skin with essential fatty acids and nutrients necessary for collagen production. 420 Skincare CBD body butter also provides relief from sore joints, rashes circulation, sunburns, arthritis, chronic pain, psoriasis, and lupus. Available in 3 sizes & sample 100mg 1 oz, 500mg 4 oz, 1000mg 4 oz. The statements regarding this product have not been evaluated by the FDA not meant to diagnose, treat, cure or maintain any ailments or diseases in accordance with FDA guidelines.',
        price: '19.99'
        }, {
          name: 'CBD Body Butter - 500mg ',
        img_url: 'https://static.wixstatic.com/media/7026a3_2ff271b6a9f84f9fa28745f1f033b071~mv2_d_2000_2000_s_2.jpg',
        description: 'With a thicker consistency than body cream, 420 Skincares CBD body butter is a Skin Super Food that is crafted from seeds found in the Shea tree fruit. Naturally rich in vitamins, our CBD body butter provides the skin with essential fatty acids and nutrients necessary for collagen production. 420 Skincare CBD body butter also provides relief from sore joints, rashes circulation, sunburns, arthritis, chronic pain, psoriasis, and lupus. Available in 3 sizes & sample 100mg 1 oz, 500mg 4 oz, 1000mg 4 oz. The statements regarding this product have not been evaluated by the FDA not meant to diagnose, treat, cure or maintain any ailments or diseases in accordance with FDA guidelines.',
        price: '49.99'
        }, {
          name: 'CBD Body Butter - 1000mg ',
        img_url: 'https://static.wixstatic.com/media/7026a3_e85048fddca449dcbb6550ca3ed22eef~mv2_d_2000_2000_s_2.jpg',
        description: 'With a thicker consistency than body cream, 420 Skincares CBD body butter is a Skin Super Food that is crafted from seeds found in the Shea tree fruit. Naturally rich in vitamins, our CBD body butter provides the skin with essential fatty acids and nutrients necessary for collagen production. 420 Skincare CBD body butter also provides relief from sore joints, rashes circulation, sunburns, arthritis, chronic pain, psoriasis, and lupus. Available in 3 sizes & sample 100mg 1 oz, 500mg 4 oz, 1000mg 4 oz. The statements regarding this product have not been evaluated by the FDA not meant to diagnose, treat, cure or maintain any ailments or diseases in accordance with FDA guidelines.',
        price: '79.99'
        }, {
        name: 'CBD Soap - 50mg',
        img_url: 'https://static.wixstatic.com/media/7026a3_b17a842c8e14420f8dc84a9871b9955a~mv2_d_2861_1924_s_2.jpg',
        description: 'Our famous 420 Skincare 100% natural and organic CBD 50mg Soap is perfectly suited for sensitive skin. Our soap is deliciously aromatic and has medicinal properties provided by the cannabis plant, making it an excellent choice for people who live a healthy lifestyle and only want the best for their bodies. Choose your favorite scent! This product complies with all FDA standards and is not meant to diagnose, treat, cure or maintain any ailments or diseases in accordance with FDA guidelines.',
        price: '10.99'
      }, {
        name: 'CBD Bath Bomb - Twin Pack',
        img_url: 'https://static.wixstatic.com/media/7026a3_0b89fde772054456b6075a76862efb82~mv2_d_3456_2304_s_2.jpg',
        description: 'Drop a 420 Skincare CBD bath bomb in your tub and watch it fizz! Our bath bombs twin packs are excellent, not only for relaxation, but also for skin health and detoxification. The following ingredients work with CBD for the ultimate bath bomb experience. Epson Salt, which absorbs through the skin to help flush toxins and help promote relaxation. White clay which assists in detoxification and purification of the skin and underlying issues. Sweet almond oil, which provides beneficial nutrients and vitamins. All bath bombs are hand-crafted and will, therefore, vary in appearance. Choose your favorie scents. This product complies with all FDA standards and is not meant to diagnose, treat, cure or maintain any ailments or diseases in accordance with FDA guidelines.',
        price: '24.99'
      }
    ]);
  });
};
