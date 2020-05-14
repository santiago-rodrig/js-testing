import Calculator from '../src/calculator';

it('adds two numbers', () => {
  expect(Calculator.add(1, 2)).toBe(3);
  expect(Calculator.add(1, 3)).toBe(4);
  expect(Calculator.add(-1, 1)).toBe(0);
});

it('adds several numbers', () => {
  expect(Calculator.add(1, 2, 3)).toBe(6);
  expect(Calculator.add(-1, 1, 25, 12, 19)).toBe(56);
});

it('subtracts two numbers', () => {
  expect(Calculator.subtract(1, 2)).toBe(-1);
  expect(Calculator.subtract(4, 2)).toBe(2);
  expect(Calculator.subtract(Math.PI, Math.PI)).toBe(0);
});

it('subtracts several numbers', () => {
  expect(Calculator.subtract(1, 2, 3)).toBe(-4);
  expect(Calculator.subtract(27, 9, 9)).toBe(9);
  expect(Calculator.subtract(38, 19, 8, 5)).toBe(6);
});

it('divides two numbers', () => {
  expect(Calculator.divide(4, 2)).toBe(2);
  expect(Calculator.divide(11, 3)).toBeCloseTo(3.6666);
});

it('divides several numbers', () => {
  expect(Calculator.divide(8, 2, 2)).toBe(2);
  expect(Calculator.divide(99, 3, 5, 2)).toBe(3.3);
  expect(Calculator.divide(29 * Math.PI, Math.PI)).toBe(29);
});

it('multiplies two numbers', () => {
  expect(Calculator.multiply(2, 3)).toBe(6);
  expect(Calculator.multiply(19, 3)).toBe(57);
  expect(Calculator.multiply(987342, 0)).toBe(0);
  expect(Calculator.multiply(239879651, 1)).toBe(239879651);
});

it('multiplies several numbers', () => {
  expect(Calculator.multiply(3, 3, 3)).toBe(27);
  expect(Calculator.multiply(31315, 541231, 0, 13123)).toBe(0);
  expect(Calculator.multiply(1, 1, 1, 23, 1, 1)).toBe(23);
  expect(Calculator.multiply(987, 789, 654, 232, 109)).toBe(12879125851536);
});
