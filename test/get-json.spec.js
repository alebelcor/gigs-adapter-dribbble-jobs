'use strict';

import {join} from 'path';
import test from 'ava';
import isPlainObj from 'is-plain-obj';

import getJson from '../lib/get-json';

test('it should return json', t => {
  const xml = require('fs').readFileSync(join(__dirname, 'fixtures/rss.xml'), 'utf8');
  const json = getJson(xml);

  t.true(isPlainObj(json));
  t.true(Array.isArray(json.items));
  t.true(json.items.length === 1);
});
