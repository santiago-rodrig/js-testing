import arrayAnalysis from '../src/array_analysis';
it('gets the minimum number in the collection', () => {
  expect(arrayAnalysis([1, 2, 3]).min).toBe(1);
  expect(arrayAnalysis([-23, 100, 1453]).min).toBe(-23);
  expect(arrayAnalysis([-101, 45, 0, -102]).min).toBe(-102);
});
it('gets the maximum number in the collection', () => {
  expect(arrayAnalysis([1, 2, 3]).max).toBe(3);
  expect(arrayAnalysis([-23, 100, 1453]).max).toBe(1453);
  expect(arrayAnalysis([-101, 45, 0, -102]).max).toBe(45);
});
it('gets the average of the numbers in the collection', () => {
  expect(arrayAnalysis([1, 2, 3]).average).toBe(2);
  expect(arrayAnalysis([-23, 100, 1453]).average).toBe(510);
  expect(arrayAnalysis([-101, 45, 0, -102]).average).toBe(-39.5);
});
it('gets the length of the collection', () => {
  expect(arrayAnalysis([1, 2, 3]).length).toBe(3);
  expect(arrayAnalysis([-23, 100, 1453]).length).toBe(3);
  expect(arrayAnalysis([-101, 45, 0, -102]).length).toBe(4);
});