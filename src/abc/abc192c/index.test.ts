import { main } from '.';

describe('abc192/abc192b', () => {
  test('1', () => {
    const input = `314 2`;
    expect(main(input)).toBe(693);
  });

  test('2', () => {
    const input = `1000000000 100`;
    expect(main(input)).toBe(0);
  });

  test('3', () => {
    const input = `6174 100000`;
    expect(main(input)).toBe(6174);
  });
});
