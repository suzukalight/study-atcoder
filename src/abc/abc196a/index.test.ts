import { main } from '.';

describe('abc196/abc196a', () => {
  test('1', () => {
    const input = `0 10
0 10
`;
    expect(main(input)).toBe(10);
  });

  test('2', () => {
    const input = `-100 -100
100 100
`;
    expect(main(input)).toBe(-200);
  });

  test('3', () => {
    const input = `-100 100
-100 100
`;
    expect(main(input)).toBe(200);
  });
});
