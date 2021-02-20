import { main } from '.';

describe('abc192/abc192b', () => {
  test('1', () => {
    const input = `dIfFiCuLt`;
    expect(main(input)).toBe('Yes');
  });

  test('2', () => {
    const input = `eASY`;
    expect(main(input)).toBe('No');
  });

  test('3', () => {
    const input = `a`;
    expect(main(input)).toBe('Yes');
  });
});
