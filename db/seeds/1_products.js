exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('products').del().then(function() {
    // Inserts seed entries
    return knex('products').insert([
      {
        name: 'CBD Body Cream - 4oz',
        img_url: 'https://static.wixstatic.com/media/7026a3_d24057a263fd450dae7bdfc564b39cbc~mv2.jpg',
        description: '420 SkinCare CBD Organic Skin Lotion is scientifically formulated to go on smooth and leave no oily residue! Used by massage therapists and by those with fibromyalgia, eczema, liver spots and other skin ailments, our CBD Body Cream formula is praised for being fast acting and long lasting. This product complies with all FDA standards and is not meant to diagnose, treat, cure or maintain any ailments or diseases in accordance with FDA guidelines.',
        price: '40.00',
        url: 'https://www.420-skincare.com/product-page/cbd-body-cream'
      }, {
        name: 'CBD Body Butter - 4oz',
        img_url: 'https://static.wixstatic.com/media/dbda37_25a108431f054478bbddc0329a7265d7~mv2_d_3024_4032_s_4_2.jpg/v1/fill/w_315,h_420,q_85,usm_0.66_1.00_0.01/dbda37_25a108431f054478bbddc0329a7265d7~mv2_d_3024_4032_s_4_2.jpg',
        description: 'With a thicker consistency than body cream, 420 SkinCare CBD body butter is a "Skin Super Food" that is crafted from seeds found in the fruit of the Shea tree. Naturally rich in vitamins, our CBD body butter provides the skin with essential fatty acids and nutrients necessary for the collagen production. 420 SkinCare CBD body butter also provides relief from sore joints, rashes circulation, sunburns, arthritis, chronic pain, psoriasis and lupus. This product complies with all FDA standards and is not meant to diagnose, treat, cure or maintain any ailments or diseases in accordance with FDA guidelines.',
        price: '40.00',
        url: 'https://www.420-skincare.com/product-page/body-butter'
      }, {
        name: 'CBD Bath Bomb - Orange',
        img_url: 'https://static.wixstatic.com/media/7026a3_f8c5651c137142c78d4c2494986311b3~mv2.jpg',
        description: 'Drop a 420 SkinCare CBD bath bomb in your tub and watch it fizz! Our bath bombs are excellent, not only for relaxation, but also for skin health and detoxification. The following ingredients work with CBD for the ultimate bath bomb experience. Epson Salt, which absorbs through the skin to help flush toxins and help promote relaxation. White clay which assists in detoxification and purification of the skin and underlying issues. Sweet almond oil, which provides beneficial nutrients and vitamins. All bath bombs are hand-crafted and will, therefore, vary in appearance. Choose from up to 5 different scents! This product complies with all FDA standards and is not meant to diagnose, treat, cure or maintain any ailments or diseases in accordance with FDA guidelines.',
        price: '12.99',
        url: 'https://www.420-skincare.com/product-page/bath-bombs'
      }, {
        name: 'CBD Bath Bomb - Lavender',
        img_url: 'https://static.wixstatic.com/media/7026a3_f408407ef08f4bd3b5e69fcf88c1ac48~mv2.jpg',
        description: 'Drop a 420 SkinCare CBD bath bomb in your tub and watch it fizz! Our bath bombs are excellent, not only for relaxation, but also for skin health and detoxification. The following ingredients work with CBD for the ultimate bath bomb experience. Epson Salt, which absorbs through the skin to help flush toxins and help promote relaxation. White clay which assists in detoxification and purification of the skin and underlying issues. Sweet almond oil, which provides beneficial nutrients and vitamins. All bath bombs are hand-crafted and will, therefore, vary in appearance. Choose from up to 5 different scents! This product complies with all FDA standards and is not meant to diagnose, treat, cure or maintain any ailments or diseases in accordance with FDA guidelines.',
        price: '12.99',
        url: 'https://www.420-skincare.com/product-page/bath-bombs'
      }, {
        name: 'CBD Bath Bomb - Eucalyptus',
        img_url: 'https://static.wixstatic.com/media/7026a3_f8c5651c137142c78d4c2494986311b3~mv2.jpg',
        description: 'Drop a 420 SkinCare CBD bath bomb in your tub and watch it fizz! Our bath bombs are excellent, not only for relaxation, but also for skin health and detoxification. The following ingredients work with CBD for the ultimate bath bomb experience. Epson Salt, which absorbs through the skin to help flush toxins and help promote relaxation. White clay which assists in detoxification and purification of the skin and underlying issues. Sweet almond oil, which provides beneficial nutrients and vitamins. All bath bombs are hand-crafted and will, therefore, vary in appearance. Choose from up to 5 different scents! This product complies with all FDA standards and is not meant to diagnose, treat, cure or maintain any ailments or diseases in accordance with FDA guidelines.',
        price: '12.99',
        url: 'https://www.420-skincare.com/product-page/bath-bombs'
      }, {
        name: 'CBD Bath Bomb - Pineapple',
        img_url: 'https://static.wixstatic.com/media/7026a3_f408407ef08f4bd3b5e69fcf88c1ac48~mv2.jpg',
        description: 'Drop a 420 SkinCare CBD bath bomb in your tub and watch it fizz! Our bath bombs are excellent, not only for relaxation, but also for skin health and detoxification. The following ingredients work with CBD for the ultimate bath bomb experience. Epson Salt, which absorbs through the skin to help flush toxins and help promote relaxation. White clay which assists in detoxification and purification of the skin and underlying issues. Sweet almond oil, which provides beneficial nutrients and vitamins. All bath bombs are hand-crafted and will, therefore, vary in appearance. Choose from up to 5 different scents! This product complies with all FDA standards and is not meant to diagnose, treat, cure or maintain any ailments or diseases in accordance with FDA guidelines.',
        price: '12.99',
        url: 'https://www.420-skincare.com/product-page/bath-bombs'
      }, {
        name: 'CBD Soap - Strawberry Mystery',
        img_url: 'https://static.wixstatic.com/media/dbda37_d71525501bd74dde8d4bd9da4f2c419a~mv2_d_3024_4032_s_4_2.jpeg/v1/fill/w_315,h_420,q_85,usm_0.66_1.00_0.01/dbda37_d71525501bd74dde8d4bd9da4f2c419a~mv2_d_3024_4032_s_4_2.jpeg',
        description: 'Our handmade 100% natural organic soap is perfect for all skin types, especially sensitive skin. Our soap is deliciously aromatic and has the medicinal properties of CBD. An excellent choice for people who live a healthy lifestyle, and only want the best for their bodies.',
        price: '10.00',
        url: 'https://www.420-skincare.com/product-page/cbd-soaps'
      }, {
        name: 'CBD Soap - Cherry Vanilla',
        img_url: 'https://static.wixstatic.com/media/dbda37_0e9a5b332b4e48278036c348e74ac42f~mv2_d_3024_4032_s_4_2.jpeg/v1/fill/w_315,h_420,q_85,usm_0.66_1.00_0.01/dbda37_0e9a5b332b4e48278036c348e74ac42f~mv2_d_3024_4032_s_4_2.jpeg',
        description: '420 SkinCare 100% natural and organic CBD soap is perfectly suited for the sensitive skin. Our soap is deliciously aromatic and has medicinal properties provided by the cannabis plant, making it an excellent choice for people who live a healthy lifestyle and only want the best for their bodies. This product complies with all FDA standards and is not meant to diagnose, treat, cure or maintain any ailments or diseases in accordance with FDA guidelines.',
        price: '10.00',
        url: 'https://www.420-skincare.com/product-page/cbd-soaps'
      }, {
        name: 'CBD Soap - Vanilla Chocolate',
        img_url: 'https://static.wixstatic.com/media/dbda37_504101948dd544f9b5bb02d9a333f8f9~mv2_d_3024_4032_s_4_2.jpeg/v1/fill/w_315,h_420,q_85,usm_0.66_1.00_0.01/dbda37_504101948dd544f9b5bb02d9a333f8f9~mv2_d_3024_4032_s_4_2.jpeg',
        description: '420 SkinCare 100% natural and organic CBD soap is perfectly suited for the sensitive skin. Our soap is deliciously aromatic and has medicinal properties provided by the cannabis plant, making it an excellent choice for people who live a healthy lifestyle and only want the best for their bodies. This product complies with all FDA standards and is not meant to diagnose, treat, cure or maintain any ailments or diseases in accordance with FDA guidelines.',
        price: '10.00',
        url: 'https://www.420-skincare.com/product-page/cbd-soaps'
      }, {
        name: 'CBD Soap - Chocolate Mocha with Oatmeal',
        img_url: 'https://static.wixstatic.com/media/dbda37_366cb200331b437d88dab82cbd5b725a~mv2_d_3024_4032_s_4_2.jpeg/v1/fill/w_315,h_420,q_85,usm_0.66_1.00_0.01/dbda37_366cb200331b437d88dab82cbd5b725a~mv2_d_3024_4032_s_4_2.jpeg',
        description: '420 SkinCare 100% natural and organic CBD soap is perfectly suited for the sensitive skin. Our soap is deliciously aromatic and has medicinal properties provided by the cannabis plant, making it an excellent choice for people who live a healthy lifestyle and only want the best for their bodies. This product complies with all FDA standards and is not meant to diagnose, treat, cure or maintain any ailments or diseases in accordance with FDA guidelines.',
        price: '10.00',
        url: 'https://www.420-skincare.com/product-page/cbd-soaps'
      }
    ]);
  });
};
