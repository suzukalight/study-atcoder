import { main } from '.';

describe('gcd/abc109c', () => {
  test('1', () => {
    const input = `3 3
1 7 11
`;
    expect(main(input)).toBe(2);
  });

  test('2', () => {
    const input = `3 81
33 105 57
`;
    expect(main(input)).toBe(24);
  });

  test('3', () => {
    const input = `1 1
1000000000
`;
    expect(main(input)).toBe(999999999);
  });
});
