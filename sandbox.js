/*eslint-disable no-console*/
'use strict';

let insee = require('./');

insee('92380', 'garches', (err, code) => {
  if (err) {
    console.log(err);
  }
  console.log(code);
});

insee('52967', 'jdsfhjqsdfhkj', (err, code) => {
  if (err) {
    console.log(err);
  }
  console.log(code);
});
