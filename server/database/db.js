const mongoose = require('mongoose');
const daba = mongoose.connect('mongodb://localhost/fec', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
const rng = require('./randomdata.js');
const moment = require('moment');
const faker = require('faker');

const reviewSchema = new mongoose.Schema({
  username: {type: String, default: faker.internet.userName},
  userDP: {type: String, default: rng.dp},
  stars: {type: Number, default: rng.stars},
  imageUrl: {type: String, default: rng.product},
  body: {type: String, default: faker.lorem.sentences},
  date: {type: String, default: rng.date},
  productId: {type: Number, default: rng.productId},
  color: {type: String, default: rng.color}
});

const Review = mongoose.model('Review', reviewSchema);

const grab = {
  default: function(id) {
    return db.collection('reviews').find({productId: id}).sort({_id: 1}).toArray();
  },
  best: function(id) {
    return db.collection('reviews').find({productId: id}).sort({stars: -1}).toArray();
  },
  new: function(id) {
    return db.collection('reviews').find({productId: id}).sort({date: -1}).toArray();
  }
};

module.exports = Review;
module.exports.grab = grab;