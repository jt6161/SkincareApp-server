exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('products').del().then(function() {
    // Inserts seed entries
    return knex('products').insert([
      {
        name: 'CBD Bath Salts',
        img_url: 'https://static.wixstatic.com/media/7026a3_85050c20818b447ab3e5fc5b2a29fe2f~mv2_d_3456_5184_s_4_2.jpg',
        description: 'Scoop some 420 Skincare CBD Bath Salts in your tub and watch it fizz! Our bath salts are excellent, not only for relaxation, but also for skin health and detoxification. The following ingredients work with CBD for the ultimate bath salt experience. Epson Salt, which absorbs through the skin to help flush toxins and help promote relaxation. White clay which assists in detoxification and purification of the skin and underlying issues. Sweet almond oil, which provides beneficial nutrients and vitamins. All bath bombs are hand-crafted and will, therefore, vary in appearance. Choose from 2 different scents! This product complies with all FDA standards and is not meant to diagnose, treat, cure or maintain any ailments or diseases in accordance with FDA guidelines.',
        price: '22.00',
        url: 'https://www.420-skincare.com/product-page/cbd-bath-salts-lavender-1',
        page: 'ProductPage1'
      }, {
        name: 'CBD Bath Bomb Dust',
        img_url: 'https://static.wixstatic.com/media/7026a3_d10943f468a749c4af9735f7b87da1eb~mv2_d_5184_3456_s_4_2.jpg',
        description: 'Scoop some 420 Skincare CBD Bath Bomb Dust in your tub and watch it fizz! Our bath salts are excellent, not only for relaxation, but also for skin health and detoxification. The following ingredients work with CBD for the ultimate bath bomb experience. Epson Salt, which absorbs through the skin to help flush toxins and help promote relaxation. White clay which assists in detoxification and purification of the skin and underlying issues. Sweet almond oil, which provides beneficial nutrients and vitamins. All bath bombs are hand-crafted and will, therefore, vary in appearance. Choose from 2 different scents! This product complies with all FDA standards and is not meant to diagnose, treat, cure or maintain any ailments or diseases in accordance with FDA guidelines.',
        price: '22.00',
        url: 'https://www.420-skincare.com/product-page/cbd-bath-bomb-dust',
        page: 'ProductPage2'
        }, {
        name: 'CBD Body Cream - 4oz',
        img_url: 'https://static.wixstatic.com/media/7026a3_d24057a263fd450dae7bdfc564b39cbc~mv2.jpg',
        description: '420 Skincare CBD Organic Skin Lotion is scientifically formulated to go on smooth and leave no oily residue! Used by massage therapists and by those with fibromyalgia, eczema, liver spots and other skin ailments, our CBD Body Cream formula is praised for being fast acting and long lasting. This product complies with all FDA standards and is not meant to diagnose, treat, cure or maintain any ailments or diseases in accordance with FDA guidelines.',
        price: '40.00',
        url: 'https://www.420-skincare.com/product-page/cbd-body-cream',
        page: 'ProductPage3'
      }, {
        name: 'CBD Body Butter - 4oz',
        img_url: 'https://static.wixstatic.com/media/7026a3_beff99081d4e4f49aa01df3543538976~mv2_d_5184_3456_s_4_2.jpg/v1/fill/w_520,h_420,q_85,usm_0.66_1.00_0.01/7026a3_beff99081d4e4f49aa01df3543538976~mv2_d_5184_3456_s_4_2.jpg',
        description: 'With a thicker consistency than body cream, 420 Skincare CBD body butter is a "Skin Super Food" that is crafted from seeds found in the fruit of the Shea tree. Naturally rich in vitamins, our CBD body butter provides the skin with essential fatty acids and nutrients necessary for the collagen production. 420 SkinCare CBD body butter also provides relief from sore joints, rashes circulation, sunburns, arthritis, chronic pain, psoriasis and lupus. This product complies with all FDA standards and is not meant to diagnose, treat, cure or maintain any ailments or diseases in accordance with FDA guidelines.',
        price: '40.00',
        url: 'https://www.420-skincare.com/product-page/body-butter',
        page: 'ProductPage4'
      }, {
        name: 'CBD Soap',
        img_url: 'https://static.wixstatic.com/media/7026a3_3b4f791c968f49c49ae5fd522e2f7780~mv2_d_4032_3024_s_4_2.jpg',
        description: '420 Skincare 100% natural and organic CBD soap is perfectly suited for the sensitive skin. Our soap is deliciously aromatic and has medicinal properties provided by the cannabis plant, making it an excellent choice for people who live a healthy lifestyle and only want the best for their bodies. Choose your favorite scent! This product complies with all FDA standards and is not meant to diagnose, treat, cure or maintain any ailments or diseases in accordance with FDA guidelines.',
        price: '10.00',
        url: 'https://www.420-skincare.com/product-page/cbd-soap-blueberry-orange',
        page: 'ProductPage6'
      }, {
        name: 'CBD Bath Bomb - Twin Pack',
        img_url: 'https://static.wixstatic.com/media/7026a3_1f33fc90df2f4db29549c3c7f9b11b56~mv2_d_5184_3456_s_4_2.jpg',
        description: 'Drop a 420 Skincare CBD bath bomb in your tub and watch it fizz! Our bath bombs twin packs are excellent, not only for relaxation, but also for skin health and detoxification. The following ingredients work with CBD for the ultimate bath bomb experience. Epson Salt, which absorbs through the skin to help flush toxins and help promote relaxation. White clay which assists in detoxification and purification of the skin and underlying issues. Sweet almond oil, which provides beneficial nutrients and vitamins. All bath bombs are hand-crafted and will, therefore, vary in appearance. This product complies with all FDA standards and is not meant to diagnose, treat, cure or maintain any ailments or diseases in accordance with FDA guidelines.',
        price: '20.00',
        url: 'https://www.420-skincare.com/product-page/cbd-bath-bomb-pineapple',
        page: 'ProductPage7'
      }
    ]);
  });
};
