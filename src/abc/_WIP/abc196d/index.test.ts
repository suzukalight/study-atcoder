import { main } from '.';

describe('abc196/abc196d', () => {
  test.skip('1', () => {
    const input = `2 2 1 2`;
    expect(main(input)).toBe(4);
  });

  test.skip('2', () => {
    const input = `3 3 4 1`;
    expect(main(input)).toBe(18);
  });

  test.skip('3', () => {
    const input = `4 4 8 0`;
    expect(main(input)).toBe(36);
  });
});
