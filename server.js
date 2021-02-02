const express = require('express');
const app = express();
const port = '8080';
const db = require('./server/database/db.js');
const cors = require('cors');

app.use(cors({
  origin: 'http://localhost:1111'
}));
app.use('/', express.static('public'));
app.use('/bundle', express.static('public/dist/app.js'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index');
});


app.get('/:sort/:productId', (req, res) => {
  var sortBy = req.params.sort;
  var productId = Number(req.params.productId);
  // Will sort by default, best, or new with the productId that equals the productId coming in
  // if (sortBy === 'default') {
    db.grab[sortBy](productId)
      .then((results) => {
        res.json(results);
      })
      .catch((err) => {
        if (err) {
          console.error(err);
        }
      })
  // };

  // if (sortBy === 'best') {
  //   db.grab.best(productId)
  //     .then((results) => {
  //       res.json(results);
  //     })
  //     .catch((err) => {
  //       if (err) {
  //         console.error(err);
  //       }
  //     })
  // };

  // if (sortBy === 'new') {
  //   db.grab.new(productId)
  //     .then((results) => {
  //       res.json(results);
  //     })
  //     .catch((err) => {
  //       if (err) {
  //         console.error(err);
  //       }
  //     })
  // }
});



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})