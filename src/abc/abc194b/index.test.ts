import { main } from '.';

describe('abc194/abc194b', () => {
  test('1', () => {
    const input = `3
8 5
4 4
7 9
`;
    expect(main(input)).toBe(5);
  });

  test('2', () => {
    const input = `3
11 7
3 2
6 7
`;
    expect(main(input)).toBe(5);
  });
});
