'use strict';

import test from 'ava';
import isPlainObj from 'is-plain-obj';

import getGotOptions from '../lib/get-got-options';

test('it should return an object', t => {
  const pkg = require('../package.json');

  const gotOptions = getGotOptions();

  t.true(isPlainObj(gotOptions));
  t.true(isPlainObj(gotOptions.headers));
  t.deepEqual(pkg.repository.url, gotOptions.headers['user-agent']);
});
