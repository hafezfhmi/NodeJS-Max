const path = require('path');
const shopRouter = require('express').Router();

shopRouter.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
});

module.exports = shopRouter;
