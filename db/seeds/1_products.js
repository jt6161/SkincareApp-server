exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('products').del().then(function() {
    // Inserts seed entries
    return knex('products').insert([
      {
        product_id: '0550afac-6ed5-c3c3-cd1b-f80167a45739',
        name: 'CBD Body Cream - 4oz',
        img_url: 'https://static.wixstatic.com/media/7026a3_d24057a263fd450dae7bdfc564b39cbc~mv2.jpg',
        description: '420 Skincare CBD Organic Skin Lotion is scientifically formulated to go on smooth and leave no oily residue! Used by massage therapists and by those with fibromyalgia, eczema, liver spots and other skin ailments, our CBD Body Cream formula is praised for being fast acting and long lasting. This product complies with all FDA standards and is not meant to diagnose, treat, cure or maintain any ailments or diseases in accordance with FDA guidelines.',
        price: '40.00',
        url: 'https://www.420-skincare.com/product-page/cbd-body-cream'
      }, {
        product_id: 'ed00c14b-0a69-e16c-d4ea-808207d837c9',
        name: 'CBD Body Butter - 4oz',
        img_url: 'https://static.wixstatic.com/media/7026a3_beff99081d4e4f49aa01df3543538976~mv2_d_5184_3456_s_4_2.jpg/v1/fill/w_520,h_420,q_85,usm_0.66_1.00_0.01/7026a3_beff99081d4e4f49aa01df3543538976~mv2_d_5184_3456_s_4_2.jpg',
        description: 'With a thicker consistency than body cream, 420 Skincare CBD body butter is a "Skin Super Food" that is crafted from seeds found in the fruit of the Shea tree. Naturally rich in vitamins, our CBD body butter provides the skin with essential fatty acids and nutrients necessary for the collagen production. 420 SkinCare CBD body butter also provides relief from sore joints, rashes circulation, sunburns, arthritis, chronic pain, psoriasis and lupus. This product complies with all FDA standards and is not meant to diagnose, treat, cure or maintain any ailments or diseases in accordance with FDA guidelines.',
        price: '40.00',
        url: 'https://www.420-skincare.com/product-page/body-butter'
      }, {
        product_id: '87d878a5-afc3-6150-21b0-55e8851f3661',
        name: 'CBD Bath Bomb - Orange',
        img_url: 'https://static.wixstatic.com/media/7026a3_f8c5651c137142c78d4c2494986311b3~mv2.jpg',
        description: 'Drop a 420 Skincare CBD bath bomb in your tub and watch it fizz! Our bath bombs are excellent, not only for relaxation, but also for skin health and detoxification. The following ingredients work with CBD for the ultimate bath bomb experience. Epson Salt, which absorbs through the skin to help flush toxins and help promote relaxation. White clay which assists in detoxification and purification of the skin and underlying issues. Sweet almond oil, which provides beneficial nutrients and vitamins. All bath bombs are hand-crafted and will, therefore, vary in appearance. Choose from up to 5 different scents! This product complies with all FDA standards and is not meant to diagnose, treat, cure or maintain any ailments or diseases in accordance with FDA guidelines.',
        price: '12.99',
        url: 'https://www.420-skincare.com/product-page/cbd-bath-bomb-orange'
      }, {
        product_id: '9b2c82d0-bcab-d0b8-5227-9159b7850cdb',
        name: 'CBD Bath Bomb - Lavender',
        img_url: 'https://static.wixstatic.com/media/7026a3_f408407ef08f4bd3b5e69fcf88c1ac48~mv2.jpg',
        description: 'Drop a 420 Skincare CBD bath bomb in your tub and watch it fizz! Our bath bombs are excellent, not only for relaxation, but also for skin health and detoxification. The following ingredients work with CBD for the ultimate bath bomb experience. Epson Salt, which absorbs through the skin to help flush toxins and help promote relaxation. White clay which assists in detoxification and purification of the skin and underlying issues. Sweet almond oil, which provides beneficial nutrients and vitamins. All bath bombs are hand-crafted and will, therefore, vary in appearance. Choose from up to 5 different scents! This product complies with all FDA standards and is not meant to diagnose, treat, cure or maintain any ailments or diseases in accordance with FDA guidelines.',
        price: '12.99',
        url: 'https://www.420-skincare.com/product-page/cbd-bath-bomb-lavender'
      }, {
        product_id: 'c39aeb1d-344a-0c2e-d506-dde1b7e06d63',
        name: 'CBD Bath Bomb - Eucalyptus',
        img_url: 'https://static.wixstatic.com/media/7026a3_f8c5651c137142c78d4c2494986311b3~mv2.jpg',
        description: 'Drop a 420 Skincare CBD bath bomb in your tub and watch it fizz! Our bath bombs are excellent, not only for relaxation, but also for skin health and detoxification. The following ingredients work with CBD for the ultimate bath bomb experience. Epson Salt, which absorbs through the skin to help flush toxins and help promote relaxation. White clay which assists in detoxification and purification of the skin and underlying issues. Sweet almond oil, which provides beneficial nutrients and vitamins. All bath bombs are hand-crafted and will, therefore, vary in appearance. Choose from up to 5 different scents! This product complies with all FDA standards and is not meant to diagnose, treat, cure or maintain any ailments or diseases in accordance with FDA guidelines.',
        price: '12.99',
        url: 'https://www.420-skincare.com/product-page/cbd-bath-bomb-eucalyptus'
      }, {
        product_id: 'db5e87e7-2020-651f-4940-0fe559afb8e5',
        name: 'CBD Bath Bomb - Pineapple',
        img_url: 'https://static.wixstatic.com/media/7026a3_f408407ef08f4bd3b5e69fcf88c1ac48~mv2.jpg',
        description: 'Drop a 420 Skincare CBD bath bomb in your tub and watch it fizz! Our bath bombs are excellent, not only for relaxation, but also for skin health and detoxification. The following ingredients work with CBD for the ultimate bath bomb experience. Epson Salt, which absorbs through the skin to help flush toxins and help promote relaxation. White clay which assists in detoxification and purification of the skin and underlying issues. Sweet almond oil, which provides beneficial nutrients and vitamins. All bath bombs are hand-crafted and will, therefore, vary in appearance. Choose from up to 5 different scents! This product complies with all FDA standards and is not meant to diagnose, treat, cure or maintain any ailments or diseases in accordance with FDA guidelines.',
        price: '12.99',
        url: 'https://www.420-skincare.com/product-page/cbd-bath-bomb-pineapple'
      }, {
        product_id: '52e09ac5-44be-ea38-2572-435988388a26',
        name: 'CBD Soap - Strawberry Mystery',
        img_url: 'https://static.wixstatic.com/media/dbda37_d71525501bd74dde8d4bd9da4f2c419a~mv2_d_3024_4032_s_4_2.jpeg/v1/fill/w_315,h_420,q_85,usm_0.66_1.00_0.01/dbda37_d71525501bd74dde8d4bd9da4f2c419a~mv2_d_3024_4032_s_4_2.jpeg',
        description: '420 Skincare 100% natural and organic CBD soap is perfectly suited for the sensitive skin. Our soap is deliciously aromatic and has medicinal properties provided by the cannabis plant, making it an excellent choice for people who live a healthy lifestyle and only want the best for their bodies. This product complies with all FDA standards and is not meant to diagnose, treat, cure or maintain any ailments or diseases in accordance with FDA guidelines.',
        price: '10.00',
        url: 'https://www.420-skincare.com/product-page/cbd-soap-strawberry-mystery'
      }, {
        product_id: '9c00c5d1-c062-dda2-969f-d96aa5fee468',
        name: 'CBD Soap - Cherry Vanilla',
        img_url: 'https://static.wixstatic.com/media/dbda37_0e9a5b332b4e48278036c348e74ac42f~mv2_d_3024_4032_s_4_2.jpeg/v1/fill/w_315,h_420,q_85,usm_0.66_1.00_0.01/dbda37_0e9a5b332b4e48278036c348e74ac42f~mv2_d_3024_4032_s_4_2.jpeg',
        description: '420 Skincare 100% natural and organic CBD soap is perfectly suited for the sensitive skin. Our soap is deliciously aromatic and has medicinal properties provided by the cannabis plant, making it an excellent choice for people who live a healthy lifestyle and only want the best for their bodies. This product complies with all FDA standards and is not meant to diagnose, treat, cure or maintain any ailments or diseases in accordance with FDA guidelines.',
        price: '10.00',
        url: 'https://www.420-skincare.com/product-page/cbd-soap-cherry-vanilla'
      }, {
        product_id: 'd6b75cd7-37ba-c748-1406-6156100b0a7c',
        name: 'CBD Soap - Vanilla Chocolate',
        img_url: 'https://static.wixstatic.com/media/dbda37_504101948dd544f9b5bb02d9a333f8f9~mv2_d_3024_4032_s_4_2.jpeg/v1/fill/w_315,h_420,q_85,usm_0.66_1.00_0.01/dbda37_504101948dd544f9b5bb02d9a333f8f9~mv2_d_3024_4032_s_4_2.jpeg',
        description: '420 Skincare 100% natural and organic CBD soap is perfectly suited for the sensitive skin. Our soap is deliciously aromatic and has medicinal properties provided by the cannabis plant, making it an excellent choice for people who live a healthy lifestyle and only want the best for their bodies. This product complies with all FDA standards and is not meant to diagnose, treat, cure or maintain any ailments or diseases in accordance with FDA guidelines.',
        price: '10.00',
        url: 'https://www.420-skincare.com/product-page/cbd-soap-vanilla-chocolate'
      }, {
        product_id: 'fe9b1cff-6549-b470-8649-b6d456a0b895',
        name: 'CBD Soap - Chocolate Mocha with Oatmeal',
        img_url: 'https://static.wixstatic.com/media/dbda37_366cb200331b437d88dab82cbd5b725a~mv2_d_3024_4032_s_4_2.jpeg/v1/fill/w_315,h_420,q_85,usm_0.66_1.00_0.01/dbda37_366cb200331b437d88dab82cbd5b725a~mv2_d_3024_4032_s_4_2.jpeg',
        description: '420 Skincare 100% natural and organic CBD soap is perfectly suited for the sensitive skin. Our soap is deliciously aromatic and has medicinal properties provided by the cannabis plant, making it an excellent choice for people who live a healthy lifestyle and only want the best for their bodies. This product complies with all FDA standards and is not meant to diagnose, treat, cure or maintain any ailments or diseases in accordance with FDA guidelines.',
        price: '10.00',
        url: 'https://www.420-skincare.com/product-page/cbd-soap-chocolate-mocha-with-oatmeal'
      }
    ]);
  });
};
