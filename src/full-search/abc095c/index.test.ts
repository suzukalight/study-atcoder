import { main } from '.';

describe('full-search/abc095c', () => {
  test('1', () => {
    const input = `1500 2000 1600 3 2`;
    expect(main(input)).toBe(7900);
  });

  test('2', () => {
    const input = `1500 2000 1900 3 2`;
    expect(main(input)).toBe(8500);
  });

  test('3', () => {
    const input = `1500 2000 500 90000 100000`;
    expect(main(input)).toBe(100000000);
  });
});
