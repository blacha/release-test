import assert from 'node:assert';
import test from 'node:test';

import * as pkgB from '../index.js';

test('pkg-b', () => {
  test('should return something', () => {
    assert.notEqual(pkgB.handler(), null);
    assert.equal(pkgB.handler(), 'Hello World, Chicken!');
  });
});
