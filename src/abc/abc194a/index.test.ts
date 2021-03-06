import { main } from '.';

describe('abc194/abc194a', () => {
  test('1', () => {
    const input = `10 8`;
    expect(main(input)).toBe(1);
  });

  test('2', () => {
    const input = `1 2`;
    expect(main(input)).toBe(3);
  });

  test('3', () => {
    const input = `0 0`;
    expect(main(input)).toBe(4);
  });
});
