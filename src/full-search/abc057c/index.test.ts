import { main } from '.';

describe('full-search/abc057c', () => {
  test('1', () => {
    const input = `10000`;
    expect(main(input)).toBe(3);
  });

  test('2', () => {
    const input = `1000003`;
    expect(main(input)).toBe(7);
  });

  test('3', () => {
    const input = `9876543210`;
    expect(main(input)).toBe(6);
  });
});
