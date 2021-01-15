const faker = require('faker');
const moment = require('moment');

var avatars = [
  null,
  'https://hulks-rage-reviews-mockdata.s3.us-east-2.amazonaws.com/mockdata/product-review/avatars/1456931809_4ff9ab48a025ff52e4a2ae008b1a6fb2e1f2b56c.jpg',
  'https://hulks-rage-reviews-mockdata.s3.us-east-2.amazonaws.com/mockdata/product-review/avatars/21-219306_memes-by-zcooger-album-rage-comics-troll-physics.png',
  'https://hulks-rage-reviews-mockdata.s3.us-east-2.amazonaws.com/mockdata/product-review/avatars/336-3369022_239-kb-png-rage-comic-surprised-face.png',
  'https://hulks-rage-reviews-mockdata.s3.us-east-2.amazonaws.com/mockdata/product-review/avatars/397-3972087_rage-comic-faces-list-poker-face-hd-png.png',
  'https://hulks-rage-reviews-mockdata.s3.us-east-2.amazonaws.com/mockdata/product-review/avatars/405-4054874_trollface-rage-comic-internet-meme-clip-art-sad.png',
  'https://hulks-rage-reviews-mockdata.s3.us-east-2.amazonaws.com/mockdata/product-review/avatars/41-416521_left-troll-face-rage-meme-troll-face-hd.png',
  'https://hulks-rage-reviews-mockdata.s3.us-east-2.amazonaws.com/mockdata/product-review/avatars/6-63722_15-rage-troll-face-png-for-free-download.png',
  'https://hulks-rage-reviews-mockdata.s3.us-east-2.amazonaws.com/mockdata/product-review/avatars/6975908.jpg',
  'https://hulks-rage-reviews-mockdata.s3.us-east-2.amazonaws.com/mockdata/product-review/avatars/7661235.jpg',
  'https://hulks-rage-reviews-mockdata.s3.us-east-2.amazonaws.com/mockdata/product-review/avatars/99-994421_rage-comics-messages-sticker-8-raged-troll-face.png',
  'https://hulks-rage-reviews-mockdata.s3.us-east-2.amazonaws.com/mockdata/product-review/avatars/9963667389a3218249.png',
  'https://hulks-rage-reviews-mockdata.s3.us-east-2.amazonaws.com/mockdata/product-review/avatars/d4bf2e6924526012d101fc59054b71a5.png',
  'https://hulks-rage-reviews-mockdata.s3.us-east-2.amazonaws.com/mockdata/product-review/avatars/de12fb1a6a135bf851baad38a47c98d5.jpg',
  'https://hulks-rage-reviews-mockdata.s3.us-east-2.amazonaws.com/mockdata/product-review/avatars/download+(1).png',
  'https://hulks-rage-reviews-mockdata.s3.us-east-2.amazonaws.com/mockdata/product-review/avatars/download+(2).png',
  'https://hulks-rage-reviews-mockdata.s3.us-east-2.amazonaws.com/mockdata/product-review/avatars/download+(3).png',
  'https://hulks-rage-reviews-mockdata.s3.us-east-2.amazonaws.com/mockdata/product-review/avatars/download.png',
  'https://hulks-rage-reviews-mockdata.s3.us-east-2.amazonaws.com/mockdata/product-review/avatars/gratis-png-conoce-tu-meme-linda-sobrecarga-rabia-comic-meme.png',
  'https://hulks-rage-reviews-mockdata.s3.us-east-2.amazonaws.com/mockdata/product-review/avatars/gratis-png-rabia-comica-meme-internet-trollface-cara-graciosa.png',
  'https://hulks-rage-reviews-mockdata.s3.us-east-2.amazonaws.com/mockdata/product-review/avatars/images+(1).jpg',
  'https://hulks-rage-reviews-mockdata.s3.us-east-2.amazonaws.com/mockdata/product-review/avatars/images.jpg',
  'https://hulks-rage-reviews-mockdata.s3.us-east-2.amazonaws.com/mockdata/product-review/avatars/images.png',
  'https://hulks-rage-reviews-mockdata.s3.us-east-2.amazonaws.com/mockdata/product-review/avatars/png-transparent-man-showing-tongue-illustration-rage-comic-internet-meme-genius-youtube-meme-white-mammal-face.png',
  'https://hulks-rage-reviews-mockdata.s3.us-east-2.amazonaws.com/mockdata/product-review/avatars/profile-3-1.3e702c5b.png',
  'https://hulks-rage-reviews-mockdata.s3.us-east-2.amazonaws.com/mockdata/product-review/avatars/timothy-paul-smith-256424-1200x800.jpg',
  'https://hulks-rage-reviews-mockdata.s3.us-east-2.amazonaws.com/mockdata/product-review/avatars/unnamed.png',
  'https://hulks-rage-reviews-mockdata.s3.us-east-2.amazonaws.com/mockdata/product-review/avatars/v0caqchbtn741.jpg',
  'https://hulks-rage-reviews-mockdata.s3.us-east-2.amazonaws.com/mockdata/product-review/avatars/vadivelu-rage-comic-sarcasm-joke-comedian-png-favpng-9UzYRZtFrDst32h2AD8YLb74y_t.jpg',
  null
];

var productPic = [
  null,
  'https://hulks-rage-reviews-mockdata.s3.us-east-2.amazonaws.com/mockdata/product-review/upload/4048878_2048x_6ceea4d9-3ea0-4e9e-8c95-5bae001e5dd6_large.jpg',
  'https://hulks-rage-reviews-mockdata.s3.us-east-2.amazonaws.com/mockdata/product-review/upload/4089216_0.png',
  'https://hulks-rage-reviews-mockdata.s3.us-east-2.amazonaws.com/mockdata/product-review/upload/4b9db959899ba4106871d99ae71f7edeaa08b15f_00.jpg',
  'https://hulks-rage-reviews-mockdata.s3.us-east-2.amazonaws.com/mockdata/product-review/upload/7801_1.png',
  'https://hulks-rage-reviews-mockdata.s3.us-east-2.amazonaws.com/mockdata/product-review/upload/86557c5f96e746138782a01a76942a92.jpg',
  'https://hulks-rage-reviews-mockdata.s3.us-east-2.amazonaws.com/mockdata/product-review/upload/agjrlmcevgq41.jpg',
  'https://hulks-rage-reviews-mockdata.s3.us-east-2.amazonaws.com/mockdata/product-review/upload/burger_a66dcdcc-31ab-4e1f-b754-e32b5a29d3f7_large.jpg',
  'https://hulks-rage-reviews-mockdata.s3.us-east-2.amazonaws.com/mockdata/product-review/upload/cf8301b96523128c8e42f48604d4f5d0.jpg',
  'https://hulks-rage-reviews-mockdata.s3.us-east-2.amazonaws.com/mockdata/product-review/upload/ComforterSet_006_web-e1559247247636-250x250.jpg',
  'https://hulks-rage-reviews-mockdata.s3.us-east-2.amazonaws.com/mockdata/product-review/upload/cozycafepajamas.jpg',
  'https://hulks-rage-reviews-mockdata.s3.us-east-2.amazonaws.com/mockdata/product-review/upload/Deluxe_19_inch_Pusheen_plush_015_web_1000x1000.jpg',
  'https://hulks-rage-reviews-mockdata.s3.us-east-2.amazonaws.com/mockdata/product-review/upload/f4b0cc2ec1a45bf42bc33508b7446b8e.jpg',
  'https://hulks-rage-reviews-mockdata.s3.us-east-2.amazonaws.com/mockdata/product-review/upload/f5537f12167b4932827f772fdbdf85be.jpg',
  'https://hulks-rage-reviews-mockdata.s3.us-east-2.amazonaws.com/mockdata/product-review/upload/fabd905f4e378a778e0bf3dacdf5c209.jpg',
  'https://hulks-rage-reviews-mockdata.s3.us-east-2.amazonaws.com/mockdata/product-review/upload/filip-spasenovski-character-nyan.jpg',
  'https://hulks-rage-reviews-mockdata.s3.us-east-2.amazonaws.com/mockdata/product-review/upload/il_340x270.2093661249_jdrk.jpg',
  'https://hulks-rage-reviews-mockdata.s3.us-east-2.amazonaws.com/mockdata/product-review/upload/jumbo.png',
  'https://hulks-rage-reviews-mockdata.s3.us-east-2.amazonaws.com/mockdata/product-review/upload/mqdefault.jpg',
  'https://hulks-rage-reviews-mockdata.s3.us-east-2.amazonaws.com/mockdata/product-review/upload/Nyan-Cat-Onesie-Weeaboo-Desu.jpg',
  'https://hulks-rage-reviews-mockdata.s3.us-east-2.amazonaws.com/mockdata/product-review/upload/pusheen-sleep-mask-style_1000x1000.png',
  'https://hulks-rage-reviews-mockdata.s3.us-east-2.amazonaws.com/mockdata/product-review/upload/pusheenhoodie_0e9be86f-72a1-4fa1-a878-b7fa9c7cab29_large.jpg',
  'https://hulks-rage-reviews-mockdata.s3.us-east-2.amazonaws.com/mockdata/product-review/upload/qhjbdsd5fnocyaptfirw_900x.jpg',
  'https://hulks-rage-reviews-mockdata.s3.us-east-2.amazonaws.com/mockdata/product-review/upload/s-l1600.jpg',
  'https://hulks-rage-reviews-mockdata.s3.us-east-2.amazonaws.com/mockdata/product-review/upload/ur%2Cmask_flatlay_front%2Cproduct%2C600x600.u3.jpg',
  null
];

var dp = function() {
  // Selects a random entry from the avatar array
  var index = Math.floor(Math.random() * avatars.length);
  return avatars[index];
};

var product = function() {
  // Selects a random entry from the productPic array
  var index = Math.floor(Math.random() * productPic.length);
  return productPic[index];
};

var stars = function() {
  // Selects a number from 0-5 for the stars
  return Math.floor(Math.random() * 6);
}

var productId = function() {
  // Selects a number from 1-18 for a product
  return Math.floor((Math.random() * 18) + 1);
};

var color = function () {
  // Selects a random color, or null
  var result = Math.floor((Math.random() * 2) + 1);
  if (result === 1) {
    return faker.commerce.color();
  } else {
    return null;
  }
};

var date = function () {
  // Creates a recent date and converts it to Month Day, Year. Like Jan, 11th, 2021
  var date = faker.date.recent();
  return moment(date).format("MMM Do, YYYY")
}

module.exports.dp = dp;
module.exports.product = product;
module.exports.stars = stars;
module.exports.productId = productId;
module.exports.color = color;
module.exports.date = date;