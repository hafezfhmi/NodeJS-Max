const http = require('http');
const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log('Always run');
  next();
});

app.use('/add-product', (req, res, next) => {
  console.log('Hello World2');
  res.send('add-product');
});

app.use('/', (req, res, next) => {
  console.log('Hello World2');
  res.send({ some: 'json' });
});

const server = http.createServer(app);

server.listen(3000);
