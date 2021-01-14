const database = require('./db.js');

const lyrics = [
  {
    username: 'YouAre Myfire',
    stars: 1,
    imageUrl: 'https://2.bp.blogspot.com/-cn6fSsFjKHo/WYy2wn5iAaI/AAAAAAAACb4/vW8p9M9kMOUBTEegK_H4pqZH1jPxtz5bwCLcBGAs/s400/Desire%2BQuotes%2Bwww.mostphrases.blogspot.com.jpg',
    body: `Believe
    when I say
    I
    want
    it
    that
    way`,
  },
  {
    username: 'Butwe Are',
    stars: 2,
    imageUrl: 'https://img.artpal.com/637831/3-19-11-20-5-10-25m.jpg',
    body: `Can't reach to
    your heart
    When you say
    That I
    want
    it
    that
    way`,
  },
  {
    username: 'Tellme Why',
    body: `Ain't nothin' but a heartache`,
  },
  {
    username: 'Tellme Why',
    body: `Ain't nothin' but a mistake`,
  },
  {
    username: 'Tellme Why',
    body: `I never wanna hear you say

    I want it that way`,
  },
  {
    username: 'AmI Your',
    imageUrl: 'https://www.frontierfireprotection.com/wp-content/uploads/freshizer/730cbf2e2455c64c961be8e18e793f6b_3-Things-a-Fire-Needs-2000-c-90.jpg',
    body: `Your one
    desire
    Yes I know
    it's too late
    but I
    want
    it
    that
    way`,
  },
  {
    username: 'Tellme Why',
    body: `Ain't nothin' but a heartache`,
  },
  {
    username: 'Tellme Why',
    body: `Ain't nothin' but a mistake`,
  },
  {
    username: 'Tellme Why',
    body: `I never wanna hear you say

    I want it that way`,
  },
  {
    username: 'NowI Cansee',
    body: `that we've fallen apart
    from the way that it used to be
    yeah`,
  },
  {
    username: 'No Matter',
    imageUrl: 'http://uwimprint.ca/wp-content/uploads/2020/06/Why-is-harder-for-someone-to-keep-social-distance.jpg',
    body: `I want you to know
    That deep down inside of me`,
  },
  {
    username: 'YouAre Myfire',
    stars: 1,
    imageUrl: 'https://2.bp.blogspot.com/-cn6fSsFjKHo/WYy2wn5iAaI/AAAAAAAACb4/vW8p9M9kMOUBTEegK_H4pqZH1jPxtz5bwCLcBGAs/s400/Desire%2BQuotes%2Bwww.mostphrases.blogspot.com.jpg',
    body: `You are.repeat(4)


    Don't wanna hear you say`,
  },
  {
    username: `Aint Nothin`,
    imageUrl: 'https://leadstar.us/wp-content/uploads/2018/09/but.jpg',
    body: `a heartache`,
  },
  {
    username: `Aint Nothin`,
    imageUrl: 'https://leadstar.us/wp-content/uploads/2018/09/but.jpg',
    body: `a mistake
    (Don't wanna hear you say)

    I never wanna hear you say
    (Oh, yeah)
    I want it that way`,
  },
  {
    username: 'Tellme Why',
    body: `Ain't nothin' but a heartache`,
  },
  {
    username: 'Tellme Why',
    body: `Ain't nothin' but a mistake`,
  },
  {
    username: 'Tellme Why',
    body: `I never wanna hear you say
    (Don't wanna hear you say)
    I want it that way`,
  },
  {
    username: `Tellmewhy Aint'Nothin`,
    imageUrl: 'https://leadstar.us/wp-content/uploads/2018/09/but.jpg',
    body: `a heartache`,
  },
  {
    username: `Aint Nothin`,
    imageUrl: 'https://leadstar.us/wp-content/uploads/2018/09/but.jpg',
    body: `a mistake

    I never wanna hear you say
    I
    want
    it
    that
    way`,
  },
  {
    username: `Cause`,
    stars: 5,
    imageUrl: 'https://m.media-amazon.com/images/I/81alCDquxuL._SS500_.jpg',
    body: ``,
  },
];

var createData = () => {
  database.create(lyrics)
    .then(() => {
      console.log('Data created');
    })
    .catch(() => {
      console.error('Data failed');
    })
};

createData();