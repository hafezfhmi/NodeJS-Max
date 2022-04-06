const http = require('http');
const express = require('express');
const app = express();

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

app.use(express.urlencoded(false));

app.use(adminRouter);
app.use(shopRouter);

app.use((req, res, send) => {
  res.status(404).send('Sorry, cant find that page');
});

const server = http.createServer(app);

server.listen(3000);
