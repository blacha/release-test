import test from 'node:test';
import assert from 'node:assert';
import { handler } from '../index.js';

test('pkg-a', () => {
  test('should return something', () => {
    assert.notEqual(handler('test'), null);
  });
});