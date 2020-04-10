import Calculator from '../src/calculator';

const calculator = new Calculator();

it('adds two numbers', () => {
  expect(calculator.add(1, 2)).toBe(3);
  expect(calculator.add(1, 3)).toBe(4);
  expect(calculator.add(-1, 1)).toBe(0);
});

it('adds several numbers', () => {
  expect(calculator.add(1, 2, 3)).toBe(6);
  expect(calculator.add(-1, 1, 25, 12, 19)).toBe(56);
});

it('subtracts two numbers', () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
  expect(calculator.subtract(4, 2)).toBe(2);
  expect(calculator.subtract(Math.PI, Math.PI)).toBe(0);
});

it('subtracts several numbers', () => {
  expect(calculator.subtract(1, 2, 3)).toBe(-4);
  expect(calculator.subtract(27, 9, 9)).toBe(9);
  expect(calculator.subtract(38, 19, 8, 5)).toBe(6);
});

it('divides two numbers', () => {
  expect(calculator.divide(4, 2)).toBe(2);
  expect(calculator.divide(11, 3)).toBeCloseTo(3.6666);
});

it('divides several numbers', () => {
  expect(calculator.divide(8, 2, 2)).toBe(2);
  expect(calculator.divide(99, 3, 5, 2)).toBe(3.3);
  expect(calculator.divide(29 * Math.PI, Math.PI)).toBe(29);
});

it('multiplies two numbers', () => {
  expect(calculator.multiply(2, 3)).toBe(6);
  expect(calculator.multiply(19, 3)).toBe(57);
  expect(calculator.multiply(987342, 0)).toBe(0);
  expect(calculator.multiply(239879651, 1)).toBe(239879651);
});

it('multiplies several numbers', () => {
  expect(calculator.multiply(3, 3, 3)).toBe(27);
  expect(calculator.multiply(31315, 541231, 0, 13123)).toBe(0);
  expect(calculator.multiply(1, 1, 1, 23, 1, 1)).toBe(23);
  expect(calculator.multiply(987, 789, 654, 232, 109)).toBe(12879125851536);
});
