'use strict';

import test from 'ava';
import isPlainObj from 'is-plain-obj';
import getJson from '../lib/get-json';

test('it should return json', t => {
  const xml = require('fs').readFileSync('./fixtures/rss.xml');
  const json = getJson(xml);

  t.true(isPlainObj(json));
  t.true(Array.isArray(json.items));
  t.true(json.items.length === 1);
});
