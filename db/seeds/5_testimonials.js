exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('testimonial').del()
    .then(function () {
      // Inserts seed entries
      return knex('testimonial').insert([
        {testimonial: 'I love love love 420 Skincare, I use the canna lotion and canna soap everyday! They both smell great and I love the way the products make my skin feel. I highly recommend 420 Skincare to everyone! Jenn'},
        {testimonial: '420 skincare makes amazing products. The bath bombs help so much with my pain i generally do not need any other from of medication for a few days after soaking! I use their soap every time I shower and it significantly helps with the daily strains of chronic back and knee pain! I recommend their products to everyone. Chris'},
        {testimonial: 'My good friend gave it to me as a gift to try which was the soap and bath bomb. The soap lathers very nicely and I also use it to wash my face. I love how it does not dry my face out and even my Fiancé loves using it. Makes my face feel soft and clean. As for the bath bomb, I put it in very warm/hot water and my feet came out a new pair. Thank you for great products! Jessica'},
        {testimonial: '420 Skincare is a heaven send!!!! My favorite is the cream and bar soap!!! I= have tried everything to clear my skin after getting this weird "turning 30 years old" skin problems; and the soap bar has cleared my face more than proactive and prescriptions from my doctor. The cream helps sooth aches and pains...from my feet hurting after a long day in 9inch pumps; to soothing my back pain from my car accident. I highly recommend these marvelous natural products! I know what I am getting my grandfather for his birthday 420SkinCare! Candace'},
        {testimonial: 'I was gifted a small sample of the 420 body lotion at an industry event a couple of nights ago and I I slathered some on my aching wrist and hand immediately (it is in constant pain) and within 20 minutes the pain was... gone! No joke, not exaggerating, it was gone. Brandy'},
        {testimonial: 'Great products.. beautiful heart. The best. Was so great to learn more about the company today. Jennifer'},
        {testimonial: 'I have extremely dry skin and since using the 420 soap my skin does not dry out and it feels soft, moisturized and fresh. I have not had anymore psoriasis flare ups since using. So far so Grrrrreat! Mechelle '},
        {testimonial: 'Me and my roommate have some at home and it is the PERFECT rub for any tense muscles! Loren'},
        {testimonial: 'Everything that I have tried from the 420 skincare line has been amazing! So much so that now it is all my household uses for soap and other skincare products. Belle'},
        {testimonial: 'The infused body butter, soap, and blue bath bomb were so amazing! After a long day in the sun I felt so refreshed after using these products!! Thank you so much for everything I will definitely be a returning customer and will recommend. Brooke'},
        {testimonial: 'This cream works great! I had major aches after doing yard work and my skin was itchy and inflamed from the sun or abrasions. This cream cured to pain and made the rashes go away! Ross '},
        {testimonial: 'I kept getting this itchy rash on my hands for about 3 weeks. I tried all the usual ointments for itching but nothing really helped until I used Canna Body Butter. It immediately stopped the itching and the redness went away and has not been back since! Rad '},
        {testimonial: 'I used one of the pink bath bombs and it smells amazing. My skin feels softer and smells amazing. I will be using them more often. Amanda'},
        {testimonial: 'I love it!! It works great and smell awesome.. Im in love with the soaps and bath fizz balls… Monica'},
        {testimonial: 'It is amazing I am walking around with no pain after one application thank you so much Merie'},
        {testimonial: 'I really like my 420soap. It helped clear up a skin rash I had. Thanks for your awesome products!! Will'},
        {testimonial: 'Awesome products worth checking out folks - especially the creams. Frank'}
      ]);
    });
};
