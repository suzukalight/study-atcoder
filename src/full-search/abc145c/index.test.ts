import { main } from '.';

describe('full-search/abc106b', () => {
  test('1', () => {
    const input = `3
0 0
1 0
0 1
`;
    expect(main(input)).toBeCloseTo(2.2761423749, 6);
  });

  test('2', () => {
    const input = `2
-879 981
-866 890
`;
    expect(main(input)).toBeCloseTo(91.9238815543, 6);
  });

  test('3', () => {
    const input = `8
-406 10
512 859
494 362
-955 -475
128 553
-986 -885
763 77
449 310
`;
    expect(main(input)).toBeCloseTo(7641.9817824387, 6);
  });
});
