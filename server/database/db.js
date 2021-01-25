const mongoose = require('mongoose');
const daba = mongoose.connect('mongodb://localhost/fec', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
const rng = require('./randomdata.js');
const moment = require('moment');
const faker = require('faker');

const reviewSchema = new mongoose.Schema({
  // Schema format for my data entries. If I create a document using the schema, and I don't have any properties filled out, default will generate a random value for the propertie via a function
  username: {type: String, default: faker.internet.userName},
  userDP: {type: String, default: rng.dp},
  stars: {type: Number, default: rng.stars},
  imageUrl: {type: String, default: rng.product},
  body: {type: String, default: faker.lorem.sentences},
  date: {type: Date, default: rng.date},
  productId: {type: Number, default: rng.productId},
  color: {type: String, default: rng.color}
});

const Review = mongoose.model('Review', reviewSchema);

const grab = {
  default: function(id) {
    // Grabs all entries with the productId of id, sort them by entry in the database, and converts to an array for use
    return db.collection('reviews').find({productId: id}).sort({_id: 1}).toArray();
  },
  best: function(id) {
    // Grabs all entries with the productId of id, sort them by highest stars in the database, and converts to an array for use
    return db.collection('reviews').find({productId: id}).sort({stars: -1}).toArray();
  },
  new: function(id) {
    // Grabs all entries with the productId of id, sort them by latest date in the database, and converts to an array for use
    return db.collection('reviews').find({productId: id}).sort({date: -1}).toArray();
  }
};

module.exports = Review;
module.exports.grab = grab;