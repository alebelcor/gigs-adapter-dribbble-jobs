'use strict';

import test from 'ava';
import getRemote from '../lib/get-remote';

test('it should return true', t => {
  t.true(getRemote({title: 'Designer at Foo Inc. anywhere'}));
  t.true(getRemote({title: 'Designer at Foo Inc. Anywhere'}));
  t.true(getRemote({title: 'Designer at Foo Inc. in Remote'}));
  t.true(getRemote({title: 'Designer at Foo Inc. in San Francisco or anywhere'}));
  t.true(getRemote({title: 'Designer at Foo Inc. in San Francisco or Anywhere'}));
  t.true(getRemote({title: 'Designer at Foo Inc. in San Francisco or Remote'}));
  t.true(getRemote({title: 'Designer at Foo Inc. in San Francisco or Remote (US only)'}));
  t.true(getRemote({title: 'Designer at Foo Inc. in San Francisco or U.S Remote'}));
  t.true(getRemote({title: 'Designer at Foo Inc. in San Francisco or U.S. Remote'}));
});

test('it should return false', t => {
  t.false(getRemote({title: 'Designer at Foo Inc. in San Francisco'}));
});
