const http = require('http');
const express = require('express');
const app = express();

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

app.use(express.urlencoded(false));

app.use(adminRouter);
app.use(shopRouter);

const server = http.createServer(app);

server.listen(3000);
