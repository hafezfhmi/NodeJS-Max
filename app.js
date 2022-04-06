const http = require('http');
const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log('Hello World');
  next();
});

app.use((req, res, next) => {
  console.log('Hello World2');
  next();
});

const server = http.createServer(app);

server.listen(3000);
