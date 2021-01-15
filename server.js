const express = require('express');
const app = express();
const port = '8080';
const faker = require('faker');
const db = require('./server/database/db.js');

app.use(express.static('client'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/:sort/:productId', (req, res) => {
  var sortBy = req.params.sort;
  var productId = Number(req.params.productId);
  // Will sort by default, best, or new with the productId that equals the productId coming in
  db.grab[sortBy](productId)
    .then((results) => {
      res.json(results);
    })
    .catch((err) => {
      if (err) {
        console.error(err);
      }
    })
});



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})