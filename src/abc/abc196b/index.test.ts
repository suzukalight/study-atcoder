import { main } from '.';

describe('abc196/abc196b', () => {
  test('1', () => {
    const input = `5.90`;
    expect(main(input)).toBe('5');
  });

  test('2', () => {
    const input = `0`;
    expect(main(input)).toBe('0');
  });

  test('3', () => {
    const input = `84939825309432908832902189.9092309409809091329`;
    expect(main(input)).toBe('84939825309432908832902189');
  });
});
