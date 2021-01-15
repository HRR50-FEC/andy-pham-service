const database = require('./db.js');
const rng = require('./randomdata.js');

const lyrics = [
  {
    username: 'YouAre Myfire',
    color: null,
    userDP: 'https://hulks-rage-reviews-mockdata.s3.us-east-2.amazonaws.com/mockdata/Backstreet-Boys-dp.jpg',
    stars: 1,
    productId: 1,
    imageUrl: 'https://hulks-rage-reviews-mockdata.s3.us-east-2.amazonaws.com/mockdata/Desire+Quotes.jpg',
    body: `Believe
    when I say
    I
    want
    it
    that
    way`
  },
  {
    username: 'Butwe Are',
    color: null,
    stars: 2,
    productId: 1,
    imageUrl: 'https://hulks-rage-reviews-mockdata.s3.us-east-2.amazonaws.com/mockdata/Two+worlds+apart.jpg',
    body: `Can't reach to
    your heart
    When you say
    That I
    want
    it
    that
    way`
  },
  {
    username: 'Tellme Why',
    color: null,
    stars: 1,
    productId: 1,
    body: `Ain't nothin' but a heartache`
  },
  {
    username: 'Tellme Why',
    color: null,
    stars: 1,
    productId: 1,
    body: `Ain't nothin' but a mistake`
  },
  {
    username: 'Tellme Why',
    color: null,
    stars: 1,
    productId: 1,
    body: `I never wanna hear you say

    I want it that way`
  },
  {
    username: 'AmI Your',
    color: null,
    stars: 1,
    productId: 1,
    imageUrl: 'https://hulks-rage-reviews-mockdata.s3.us-east-2.amazonaws.com/mockdata/Fire.jpg',
    body: `Your one
    desire
    Yes I know
    it's too late
    but I
    want
    it
    that
    way`
  },
  {
    username: 'Tellme Why',
    color: null,
    stars: 2,
    productId: 1,
    body: `Ain't nothin' but a heartache`
  },
  {
    username: 'Tellme Why',
    color: null,
    stars: 2,
    productId: 1,
    body: `Ain't nothin' but a mistake`
  },
  {
    username: 'Tellme Why',
    color: null,
    stars: 2,
    productId: 1,
    body: `I never wanna hear you say

    I want it that way`
  },
  {
    username: 'NowI Cansee',
    color: null,
    stars: 2,
    productId: 1,
    body: `that we've fallen apart
    from the way that it used to be
    yeah`
  },
  {
    username: 'No Matter',
    color: null,
    stars: 3,
    productId: 1,
    imageUrl: 'https://hulks-rage-reviews-mockdata.s3.us-east-2.amazonaws.com/mockdata/apart.jpg',
    body: `I want you to know
    That deep down inside of me`
  },
  {
    username: 'YouAre Myfire',
    color: null,
    stars: 1,
    productId: 1,
    imageUrl: 'https://hulks-rage-reviews-mockdata.s3.us-east-2.amazonaws.com/mockdata/Desire+Quotes.jpg',
    body: `You are.repeat(4)


    Don't wanna hear you say`
  },
  {
    username: `Aint Nothin`,
    color: null,
    stars: 3,
    productId: 1,
    imageUrl: 'https://hulks-rage-reviews-mockdata.s3.us-east-2.amazonaws.com/mockdata/but.jpg',
    body: `a heartache`
  },
  {
    username: `Aint Nothin`,
    color: null,
    stars: 3,
    productId: 1,
    imageUrl: 'https://hulks-rage-reviews-mockdata.s3.us-east-2.amazonaws.com/mockdata/but.jpg',
    body: `a mistake
    (Don't wanna hear you say)

    I never wanna hear you say
    (Oh, yeah)
    I want it that way`
  },
  {
    username: 'Tellme Why',
    color: null,
    stars: 3,
    productId: 1,
    body: `Ain't nothin' but a heartache`
  },
  {
    username: 'Tellme Why',
    color: null,
    stars: 3,
    productId: 1,
    body: `Ain't nothin' but a mistake`
  },
  {
    username: 'Tellme Why',
    color: null,
    stars: 5,
    productId: 1,
    body: `I never wanna hear you say
    (Don't wanna hear you say)
    I want it that way`
  },
  {
    username: `Tellmewhy Aint'Nothin`,
    color: null,
    stars: 5,
    productId: 1,
    imageUrl: 'https://hulks-rage-reviews-mockdata.s3.us-east-2.amazonaws.com/mockdata/but.jpg',
    body: `a heartache`
  },
  {
    username: `Aint Nothin`,
    color: null,
    stars: 1,
    productId: 1,
    imageUrl: 'https://hulks-rage-reviews-mockdata.s3.us-east-2.amazonaws.com/mockdata/but.jpg',
    body: `a mistake

    I never wanna hear you say
    I
    want
    it
    that
    way`
  },
  {
    username: `Cause`,
    color: null,
    stars: 5,
    productId: 1,
    imageUrl: 'https://hulks-rage-reviews-mockdata.s3.us-east-2.amazonaws.com/mockdata/I+want+it+that+way.jpg',
    body: ``
  },
  {
    username: `Trololol`,
    color: null,
    userDP: `https://hulks-rage-reviews-mockdata.s3.us-east-2.amazonaws.com/mockdata/Trololol.jpg`,
    stars: 5,
    productId: 1,
    imageUrl: `https://hulks-rage-reviews-mockdata.s3.us-east-2.amazonaws.com/mockdata/Trololol.jpg`,
    body: `Trolololololololololololololololol`
  },
  {
    username: `Rick Roll`,
    color: null,
    userDP: `https://hulks-rage-reviews-mockdata.s3.us-east-2.amazonaws.com/mockdata/Rick+Roll.png`,
    stars: 5,
    productId: 1,
    imageUrl: `https://hulks-rage-reviews-mockdata.s3.us-east-2.amazonaws.com/mockdata/Rick+Roll.png`,
    body: `We're no strangers to love
    You know the rules, and so do I
    A full commitment's what I'm thinking of
    You wouldn't get this from any other guy
    I
    just wanna tell you how I'm feeling
    Gotta make you
    understand`
  },
  {
    username: `Nevergonna`,
    color: null,
    stars: 5,
    productId: 1,
    body: `Give you up
    Never gonna let you down
    Never gonna run around, and desert you
    Never gonna make you cry
    Never gonna say goodbye
    Never gonna tell a lie and hurt you`
  },
];

var createData = () => {
  database.insertMany(lyrics)
    .then(() => {
      console.log('Data created');
    })
    .catch(() => {
      console.error('Data failed');
    });
  database.insertMany(Array.apply(null, Array(77)))
    .then(() => {
      console.log('Second bath of data created');
    })
    .catch(() => {
      console.error('Data failed');
    })
};

createData();