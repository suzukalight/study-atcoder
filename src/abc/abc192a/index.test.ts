import { main } from '.';

describe('abc192/abc192a', () => {
  test('1', () => {
    const input = `140`;
    expect(main(input)).toBe(60);
  });

  test('2', () => {
    const input = `1000`;
    expect(main(input)).toBe(100);
  });
});
