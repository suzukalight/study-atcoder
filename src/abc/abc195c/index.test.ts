import { main } from '.';

describe('abc195/abc195c', () => {
  test('1', () => {
    const input = `1010`;
    expect(main(input)).toBe('11');
  });

  test('2', () => {
    const input = `27182818284590`;
    expect(main(input)).toBe('107730272137364');
  });
});
