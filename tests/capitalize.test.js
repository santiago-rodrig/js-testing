import capitalize from '../src/capitalize';

it('capitalizes a string of 1 word', () => {
  expect(capitalize('hello')).toBe('Hello');
});

it('capitalizes a string of several words', () => {
  expect(capitalize('hello beautiful world')).toBe('Hello Beautiful World');
});

it('does nothing with a string of numbers', () => {
  expect(capitalize('11235 987 465')).toBe('11235 987 465');
});

it('does nothing with a string of uppercase letters', () => {
  expect(capitalize('ALL UPPERCASE HERE')).toBe('ALL UPPERCASE HERE');
});
