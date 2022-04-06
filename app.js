const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.urlencoded(false));

app.use('/add-product', (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit"/>Submit</button></form>'
  );
});

app.post('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

app.use('/', (req, res, next) => {
  res.send('hello world');
});

const server = http.createServer(app);

server.listen(3000);
