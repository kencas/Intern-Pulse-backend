import { add } from '../src/calculator';

test('adds 2 + 3 to equal 5', () => {
  expect(add(2, 3)).toBe(5);
});

test('adds 2 + (-3) to equal -1', () => {
  expect(add(2, -3)).toBe(-1);
});