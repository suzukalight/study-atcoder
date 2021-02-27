import { main } from '.';

describe('abc193/abc193a', () => {
  test('1', () => {
    const input = `100 80`;
    expect(main(input)).toBeCloseTo(20.0);
  });

  test('2', () => {
    const input = `7 6`;
    expect(main(input)).toBeCloseTo(14.285714285714285714);
  });

  test('3', () => {
    const input = `99999 99998`;
    expect(main(input)).toBeCloseTo(0.001000010000100001);
  });
});
