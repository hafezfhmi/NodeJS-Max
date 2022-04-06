const shopRouter = require('express').Router();

shopRouter.get('/', (req, res, next) => {
  res.send('hello world');
});

module.exports = shopRouter;
