import reverseString from '../src/reverse_string';

it('reverses a string of 1 word', () => {
  expect(reverseString('hello')).toBe('olleh');
  expect(reverseString('goodbye')).toBe('eybdoog');
});

it('reverses a string of multiple words', () => {
  expect(reverseString('Hello World')).toBe('dlroW olleH');
  expect(reverseString('To be or not to be, that is the question'))
    .toBe('noitseuq eht si taht ,eb ot ton ro eb oT');
});
