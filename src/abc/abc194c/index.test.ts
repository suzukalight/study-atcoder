import { main } from '.';

describe('abc194/abc194c', () => {
  test('1', () => {
    const input = `3
2 8 4
`;
    expect(main(input)).toBe(56);
  });

  test('2', () => {
    const input = `5
-5 8 9 -4 -3
`;
    expect(main(input)).toBe(950);
  });
});
