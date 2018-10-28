'use strict';

import test from 'ava';
import getIsRemote from '../lib/get-is-remote';

test('it should return true', t => {
  t.true(getIsRemote({title: 'Designer at Foo Inc. anywhere'}));
  t.true(getIsRemote({title: 'Designer at Foo Inc. Anywhere'}));
  t.true(getIsRemote({title: 'Designer at Foo Inc. Anywhere - Remote'}));
  t.true(getIsRemote({title: 'Designer at Foo Inc. in Remote'}));
  t.true(getIsRemote({title: 'Designer at Foo Inc. in San Francisco or anywhere'}));
  t.true(getIsRemote({title: 'Designer at Foo Inc. in San Francisco or Anywhere'}));
  t.true(getIsRemote({title: 'Designer at Foo Inc. in San Francisco or Remote'}));
  t.true(getIsRemote({title: 'Designer at Foo Inc. in San Francisco or Remote (US only)'}));
  t.true(getIsRemote({title: 'Designer at Foo Inc. in San Francisco or U.S Remote'}));
  t.true(getIsRemote({title: 'Designer at Foo Inc. in San Francisco or U.S. Remote'}));
});

test('it should return false', t => {
  t.false(getIsRemote({title: 'Designer at Foo Inc. in San Francisco'}));
});
