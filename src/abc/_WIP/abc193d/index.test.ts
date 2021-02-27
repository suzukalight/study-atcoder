import { main } from '.';

describe('abc193/abc193d', () => {
  test('1', () => {
    const input = `2
1144#
2233#
`;
    expect(main(input)).toBeCloseTo(0.4444444444444444, 5);
  });

  test('2', () => {
    const input = `2
9988#
1122#
`;
    expect(main(input)).toBeCloseTo(1.0, 5);
  });

  test('3', () => {
    const input = `6
1122#
2228#
`;
    expect(main(input)).toBeCloseTo(0.001932367149758454, 5);
  });

  test.skip('4', () => {
    const input = `100000
3226#
3597#
`;
    expect(main(input)).toBeCloseTo(0.6296297942426154, 5);
  });
});
