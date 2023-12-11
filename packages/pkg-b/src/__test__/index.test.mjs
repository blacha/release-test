import assert from 'node:assert';
import { describe, it } from 'node:test';

import * as pkgB from '../index.mjs';

describe('pkg-b', () => {
  it('should return something', () => {
    assert.notEqual(pkgB.handler(), null);
    assert.equal(pkgB.handler(), 'Hello World, Chicken!');
  });
});
