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

    // return db.collection('reviews').aggregate([
    //   {
    //     $bucket: {
    //       groupBy: '$productId',
    //       boundaries: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], //tells mongo what each bucket should contain, in this case, each bucket should only have entries with the same productId
    //       default: "other", // if entry doesn't match boundary, pushes it into a default bucket
    //       output: {
    //         "count": { $sum: 1},
    //         "reviews" :
    //         {
    //           $push: { // This will push an object containing the entry's info into a "reviews" array.
    //             "username": "$username",
    //             "userDP": "$userDP",
    //             "stars": "$stars",
    //             "imageUrl": "$imageUrl",
    //             "body": "$body",
    //             "color": "$color",
    //             "date": "$date"
    //           }
    //         }
    //       }
    //     }
    //   },
    //   {
    //   $match: { _id: {$eq: id}}
    //   }
    // ]).toArray();
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