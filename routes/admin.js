const path = require('path');

const adminRouter = require('express').Router();
const rootDir = require('../utils/path');

adminRouter.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

adminRouter.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = adminRouter;
