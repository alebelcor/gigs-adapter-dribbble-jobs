'use strict';

import test from 'ava';
import getTitle from '../lib/get-title';

test('it should return the title', t => {
  t.deepEqual('Developer', getTitle({title: 'Foo is hiring a Developer in San Francisco, Ca'}));
  t.deepEqual('Engineer', getTitle({title: 'Foo is hiring an Engineer in Remote'}));
  t.deepEqual('Senior Developer', getTitle({title: 'Foo is hiring a Senior Developer Anywhere'}));
  t.deepEqual('Engineering Manager', getTitle({title: 'Foo is hiring an Engineering Manager in San Francisco'}));
  t.deepEqual('Product Designer', getTitle({title: 'Foo is hiring a Product Designer in SF or U.S Remote'}));
});

test('it should return null', t => {
  t.deepEqual(null, getTitle({}));
  t.deepEqual(null, getTitle({title: 'Foo is hiring'}));
});
