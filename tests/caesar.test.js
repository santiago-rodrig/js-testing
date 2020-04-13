import caesar from '../src/caesar';
it('ciphers 1 lowercase letter', () => {
  expect(caesar('a', 1)).toBe('b');
  expect(caesar('z', 2)).toBe('b');
  expect(caesar('r', 5)).toBe('w');
});
it('ciphers several lowercase letters', () => {
  expect(caesar('ab', 1)).toBe('bc');
  expect(caesar('hello', 8)).toBe('pmttw');
  expect(caesar('goodbye', 11)).toBe('rzzomjp');
});
it('ciphers 1 uppercase letter', () => {
  expect(caesar('A', 1)).toBe('B');
  expect(caesar('Z', 3)).toBe('C');
  expect(caesar('R', 21)).toBe('M');
});
it('ciphers several uppercase letters', () => {
  expect(caesar('AB', 1)).toBe('BC');
  expect(caesar('HELLO', 8)).toBe('PMTTW');
  expect(caesar('GOODBYE', 11)).toBe('RZZOMJP');
});
it('ciphers mixed-case words', () => {
  expect(caesar('helloDUDE', 23)).toBe('ebiilARAB');
  expect(caesar('GOODBYEelen', 3)).toBe('JRRGEBHhohq');
  expect(caesar('DOGcat', 97)).toBe('WHZvtm');
});
it('ignores punctuation', () => {
  expect(caesar('hello DUDE', 23)).toBe('ebiil ARAB');
  expect(caesar('GOODBYE!?, $elen$', 3)).toBe('JRRGEBH!?, $hohq$');
  expect(caesar('_DOG_ c.a.t', 97)).toBe('_WHZ_ v.t.m');
});