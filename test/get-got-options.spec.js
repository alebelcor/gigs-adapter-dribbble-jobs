'use strict';

import test from 'ava';
import isPlainObj from 'is-plain-obj';
import getGotOptions from '../lib/get-got-options';

test('it should return an object', t => {
  t.true(isPlainObj(getGotOptions()));
});
