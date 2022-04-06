const path = require('path');

const rootDir = require('../utils/path');
const shopRouter = require('express').Router();

shopRouter.get('/', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = shopRouter;
