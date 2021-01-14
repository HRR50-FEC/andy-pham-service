const database = require('./db.js');

const lyrics = [
  {
    username: 'YouAre Myfire',
    userDP: String,
    stars: 1,
    imageUrl: 'https://2.bp.blogspot.com/-cn6fSsFjKHo/WYy2wn5iAaI/AAAAAAAACb4/vW8p9M9kMOUBTEegK_H4pqZH1jPxtz5bwCLcBGAs/s400/Desire%2BQuotes%2Bwww.mostphrases.blogspot.com.jpg',
    body: `Believe
    when I say
    I
    want
    it
    that
    way`,
    date: String
  },
  {
    username: 'Butwe Are',
    userDP: String,
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
    date: String
  },
  {
    username: 'Tellme Why',
    userDP: String,
    stars: Number,
    imageUrl: {type: String, default: null},
    body: `Ain't nothin' but a heartache`,
    date: String
  },
  {
    username: 'Tellme Why',
    userDP: String,
    stars: Number,
    imageUrl: {type: String, default: null},
    body: `Ain't nothin' but a mistake`,
    date: String
  },
  {
    username: 'Tellme Why',
    userDP: String,
    stars: Number,
    imageUrl: {type: String, default: null},
    body: `I never wanna hear you say

    I want it that way`,
    date: String
  },
  {
    username: 'AmI Your',
    userDP: String,
    stars: Number,
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
    date: String
  },
  {
    username: 'Tellme Why',
    userDP: String,
    stars: Number,
    imageUrl: {type: String, default: null},
    body: `Ain't nothin' but a heartache`,
    date: String
  },
  {
    username: 'Tellme Why',
    userDP: String,
    stars: Number,
    imageUrl: {type: String, default: null},
    body: `Ain't nothin' but a mistake`,
    date: String
  },
  {
    username: 'Tellme Why',
    userDP: String,
    stars: Number,
    imageUrl: {type: String, default: null},
    body: `I never wanna hear you say

    I want it that way`,
    date: String
  },
  {
    username: 'NowI Cansee',
    userDP: String,
    stars: Number,
    imageUrl: {type: String, default: null},
    body: `that we've fallen apart
    from the way that it used to be
    yeah`,
    date: String
  },
  {
    username: 'No Matter',
    userDP: String,
    stars: Number,
    imageUrl: 'http://uwimprint.ca/wp-content/uploads/2020/06/Why-is-harder-for-someone-to-keep-social-distance.jpg',
    body: `I want you to know
    That deep down inside of me`,
    date: String
  },
  {
    username: 'YouAre Myfire',
    userDP: String,
    stars: 1,
    imageUrl: 'https://2.bp.blogspot.com/-cn6fSsFjKHo/WYy2wn5iAaI/AAAAAAAACb4/vW8p9M9kMOUBTEegK_H4pqZH1jPxtz5bwCLcBGAs/s400/Desire%2BQuotes%2Bwww.mostphrases.blogspot.com.jpg',
    body: `You are.repeat(4)


    Don't wanna hear you say`,
    date: String
  },
  {
    username: `Aint Nothin`,
    userDP: String,
    stars: Number,
    imageUrl: 'https://leadstar.us/wp-content/uploads/2018/09/but.jpg',
    body: `a heartache`,
    date: String
  },
  {
    username: `Aint Nothin`,
    userDP: String,
    stars: Number,
    imageUrl: 'https://leadstar.us/wp-content/uploads/2018/09/but.jpg',
    body: `a mistake
    (Don't wanna hear you say)

    I never wanna hear you say
    (Oh, yeah)
    I want it that way`,
    date: String
  },
  {
    username: 'Tellme Why',
    userDP: String,
    stars: Number,
    imageUrl: {type: String, default: null},
    body: `Ain't nothin' but a heartache`,
    date: String
  },
  {
    username: 'Tellme Why',
    userDP: String,
    stars: Number,
    imageUrl: {type: String, default: null},
    body: `Ain't nothin' but a mistake`,
    date: String
  },
  {
    username: 'Tellme Why',
    userDP: String,
    stars: Number,
    imageUrl: {type: String, default: null},
    body: `I never wanna hear you say
    (Don't wanna hear you say)
    I want it that way`,
    date: String
  },
  {
    username: `Tellmewhy Aint'Nothin`,
    userDP: String,
    stars: Number,
    imageUrl: 'https://leadstar.us/wp-content/uploads/2018/09/but.jpg',
    body: `a heartache`,
    date: String
  },
  {
    username: `Aint Nothin`,
    userDP: String,
    stars: Number,
    imageUrl: 'https://leadstar.us/wp-content/uploads/2018/09/but.jpg',
    body: `a mistake

    I never wanna hear you say
    I
    want
    it
    that
    way`,
    date: String
  },
  {
    username: `Cause`,
    userDP: String,
    stars: 5,
    imageUrl: 'https://m.media-amazon.com/images/I/81alCDquxuL._SS500_.jpg',
    body: ``,
    date: String
  },
];

var createData = () => {
  database.create(lyrics);
};

createData();