const express = require('express');
const app = express();
const port = '8080';

app.use(express.static('client'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})