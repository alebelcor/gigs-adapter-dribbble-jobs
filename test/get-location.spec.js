'use strict';

import test from 'ava';
import getLocation from '../lib/get-location';

test('it should return the location', t => {
  t.deepEqual('San Francisco', getLocation({title: ' Foo Inc. is hiring a Developer in San Francisco '}));
  t.deepEqual('Brooklyn, NY', getLocation({title: ' Foo Inc. is hiring a Developer in Brooklyn, NY '}));
  t.deepEqual('Los Angeles, CA or U.S Remote', getLocation({title: ' Foo Inc. is hiring a Developer in Los Angeles, CA or U.S Remote '}));
});

test('it should return null', t => {
  t.deepEqual(null, getLocation({}));
  t.deepEqual(null, getLocation({title: ' Foo Inc. is hiring a Developer anywhere '}));
  t.deepEqual(null, getLocation({title: ' Foo Inc. is hiring a Developer Anywhere '}));
  t.deepEqual(null, getLocation({title: ' Foo Inc. is hiring a Developer in Remote '}));
  t.deepEqual(null, getLocation({title: ' Foo Inc. is hiring a Developer in remote '}));
  t.deepEqual(null, getLocation({title: ' Foo Inc. is hiring a Developer in Anywhere - Remote '}));
  t.deepEqual(null, getLocation({title: ' Foo Inc. is hiring a Developer in UTC -1 to +3 '}));
});
