import assert from 'node:assert';
import { describe, it } from 'node:test';

import { handler } from '../index.mjs';

describe('pkg-a', () => {
  it('should return something', () => {
    assert.notEqual(handler('test'), null);
  });
});
