'use strict';

function logger(req, res, next) {
  
  console.log(req.method, req.path);
  console.log(req.query);
  next();
}

module.exports = logger;