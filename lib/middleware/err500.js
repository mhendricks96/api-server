'use strict';

function err500(err, req, res, next) {
  console.log('catch-all error: ' + err);
  res.status(500).send('Server Error');
}
module.exports = err500;