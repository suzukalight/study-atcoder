import { main } from '.';

describe('abc195/abc195a', () => {
  test('1', () => {
    const input = `10 120`;
    expect(main(input)).toBe('Yes');
  });

  test('2', () => {
    const input = `10 125`;
    expect(main(input)).toBe('No');
  });
});
