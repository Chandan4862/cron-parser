import { FieldExpander } from '../utils/FieldExpander';

test('expands */15 minutes', () => {
  expect(FieldExpander.expand('*/15', 0, 59)).toEqual([0, 15, 30, 45]);
});

test('expands 1-5 hours', () => {
  expect(FieldExpander.expand('1-5', 0, 23)).toEqual([1, 2, 3, 4, 5]);
});

test('expands 1,3,5 days of month', () => {
  expect(FieldExpander.expand('1,3,5', 1, 31)).toEqual([1, 3, 5]);
});

test('expands * month', () => {
  expect(FieldExpander.expand('*', 1, 12)).toEqual([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
  ]);
});
