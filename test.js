'use strict';

let test = require('ava');
let insee = require('./');

test.cb('should compute insee code for valid zipcode/town', t => {
  t.plan(1);

  insee('92380', 'garches', (err, code) => {
    if (err) {
      test.fail();
      return t.end();
    }

    t.is(code, '92033', 'not computing the right code');
    t.end();
  });
});

test.cb('should return null code for unknown zipcode/town', t => {
  t.plan(1);

  insee('52967', 'jdsfhjqsdfhkj', (err, code) => {
    if (err) {
      test.fail();
      return t.end();
    }

    t.is(code, null, 'not returning `null` code');
    t.end();
  });
});
