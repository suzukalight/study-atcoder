import { main } from '.';

describe('abc194/abc194d', () => {
  test('1', () => {
    const input = `2`;
    expect(main(input)).toBeCloseTo(2, 6);
  });

  test('2', () => {
    const input = `3`;
    expect(main(input)).toBeCloseTo(4.5, 6);
  });
});
