import { main } from '.';

describe('full-search/abc106b', () => {
  test('1', () => {
    const input = `105`;
    expect(main(input)).toBe(1);
  });

  test('2', () => {
    const input = `7`;
    expect(main(input)).toBe(0);
  });
});
