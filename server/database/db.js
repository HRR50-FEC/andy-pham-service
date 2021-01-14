const mongoose = require('mongoose');
const daba = mongoose.connect('mongodb://localhost/fec', {useNewUrlParser: true});
const db = mongoose.connection;

const reviewSchema = new mongoose.Schema({
  username: String,
  userDP: {type: String, default: null},
  stars: {type: Number, default: 0},
  imageUrl: {type: String, default: null},
  body: String,
  date: {type: String, default: null}
});

const Review = mongoose.model('Review', reviewSchema);

const grab = {
  default: function() {
    return db.collection('reviews').find({}).toArray();
  },
  best: function() {
    return db.collection('reviews').find({}).sort({stars: 1}).toArray();
  },
  new: function() {
    return db.collection('reviews').find({}).sort({date: -1}).toArray();
  }
};

module.exports = Review;
module.exports.grab = grab;